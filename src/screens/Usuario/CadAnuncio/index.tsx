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
import TypeAhead from '../../../components/TypeAhead';

const CadastroAnuncio = () => {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();
	const [list, setList] = useState<CadAnuncio[]>([]);
	const [value, setValue] = useState<string>('');

	useEffect(() => {
		if (value) {
			const searchItems = ProfessionsMock.filter(item => (
				item.nome.toLowerCase().includes(value.toLowerCase())
			));
			setList(searchItems);
		} else {
			setList(ProfessionsMock);
		}
	}, [value]);

	return (
		<Fragment>
			<View style={tw`ios:h-${Math.floor(insets.top / 4)}`}>
				<SafeAreaView style={tw`flex-0 bg-primary`} />
			</View>
			<View style={tw`h-[15%] bg-white justify-center`}>
				<View style={tw`flex-1 mx-18 bg-white justify-center`}>
					<View style={tw`flex-row justify-around px-15`}>
						<TouchableOpacity style={tw`h-12 w-12 rounded border items-center justify-center border-slate-400 bg-white`}>
							<Image style={tw`h-7 w-7`} source={require('../../../images/servico.png')} />
						</TouchableOpacity>
						<TouchableOpacity style={tw`h-12 w-12 rounded items-center justify-center border border-slate-400 bg-white`}>
							<Image style={tw`h-7 w-7`} source={require('../../../images/camera.png')} />
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={tw`flex-1 bg-slate-100 pb-40`}>
				<View style={tw`mt-10 justify-center items-center`}>
					<Text style={tw`text-slate-600 font-normal text-xl`}>Que tipo de serviço</Text>
					<Text style={tw`text-slate-600 font-normal text-xl`}>deseja anunciar?</Text>
				</View>
				<View style={tw`justify-between`}>
					<TypeAhead
						tw={tw}
						placeholder='Pesquisar'
						content={list}
						inputStyle={tw`h-16`}
						style={tw`ml-[7%] w-86%`}
						listStyle={tw`m-3 text-base text-slate-600`}
						setValue={setValue}
						value={value}
					/>
				</View>
			</View>
			<Menu tw={tw} />
		</Fragment>
	);
};

export default CadastroAnuncio;
