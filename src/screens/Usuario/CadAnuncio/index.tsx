import {useNavigation} from '@react-navigation/native';
import React, {Fragment, useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from '../../../../service/tw';
import {Image} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ProfessionsMock} from '../../../Mocks/ProfessionsMock';
import {ScrollView} from 'react-native-gesture-handler';
import Menu from '../../../components/Menu';
import type {CadAnuncio} from '../../../../src/Models/CadAnuncio';

const CadastroAnuncio = () => {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();
	const [search, setSearch] = useState<string>('');
	const [list, setList] = useState<CadAnuncio[]>([]);

	useEffect(() => {
		if (search) {
			const searchItems = ProfessionsMock.filter(item => (
				item.nome.toLowerCase().includes(search.toLowerCase())
			));
			setList(searchItems);
		} else {
			setList(ProfessionsMock);
		}
	}, [search]);

	return (
		<Fragment>
			<View style={tw`ios:h-${Math.floor(insets.top / 4)}`}>
				<SafeAreaView style={tw`flex-0 bg-primary`} />
			</View>
			<View style={tw`h-[15%] bg-white justify-center`}>
				<View style={tw`flex-1 mx-18 bg-white justify-center`}>
					<View style={tw`flex-row justify-around px-15`}>
						<TouchableOpacity style={tw`h-12 w-12 rounded border items-center justify-center border-slate-400 bg-white`}>
							<Image style={tw`h-7 w-7`} source={require('C:/Users/Rhaniery/Documents/app-bico/bico/src/images/servico.png')} />
						</TouchableOpacity>
						<TouchableOpacity style={tw`h-12 w-12 rounded items-center justify-center border border-slate-400 bg-white`}>
							<Image style={tw`h-7 w-7`} source={require('C:/Users/Rhaniery/Documents/app-bico/bico/src/images/camera.png')} />
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={tw`flex-1 bg-slate-100 pb-40`}>
				<View style={tw`mt-10 justify-center items-center`}>
					<Text style={tw`text-slate-600 font-normal text-xl`}>Que tipo de serviço</Text>
					<Text style={tw`text-slate-600 font-normal text-xl`}>deseja anunciar?</Text>
				</View>
				<View style={tw`py-2 mt-5 items-center justify-center`}>
					<TextInput style={tw`h-16 px-25 border-solid border-[0.50] border-slate-400 rounded-md`}
						placeholder='Escolha seu serviço' value={search} onChangeText={setSearch}>
					</TextInput>
				</View>
				<View style={tw`py-10 justify-between`}>
					<ScrollView>
						{list.length === 0 ? (
							<View style={tw`flex-1 justify-center items-center pt-[20%]`}>
								<Text style={tw`text-base text-slate-600 font-semibold`}>Nenhum resultado foi encontrado</Text>
							</View>
						) : (
							<>
								{list.map(item => (
									<TouchableOpacity style={tw`border-solid border-[0.50] border-slate-400 mt-2 mx-10 rounded`}>
										<View style={tw`bg-gray-50 py-5 pr-10 items-center`} key={item.id}>
											<Text style={tw`text-slate-600 pl-10 font-semibold text-xl`}>{item.nome}</Text>
										</View>
									</TouchableOpacity>
								))}
							</>
						)}
					</ScrollView>
				</View>
			</View>
			<Menu tw={tw} />
		</Fragment>
	);
};

export default CadastroAnuncio;
