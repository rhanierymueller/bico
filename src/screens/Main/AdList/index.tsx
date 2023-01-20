
import {useNavigation} from '@react-navigation/native';
import React, {Fragment, useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Image, Dimensions} from 'react-native';
import tw from '../../../../service/tw';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {AddListMock} from '../../../../src/Mocks/AdListMock';
import {ScrollView} from 'react-native-gesture-handler';
import Menu from '../../../components/Menu';
import type {Ad} from '../../../Models/AD';

const AddList = () => {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();
	const [search, setSearch] = useState<string>('');
	const [list, setList] = useState<Ad[]>([]);

	useEffect(() => {
		if (search) {
			const searchItems = AddListMock.filter(item => (
				item.profissao.toLowerCase().includes(search.toLowerCase())
			));
			setList(searchItems);
		} else {
			setList(AddListMock);
		}
	}, [search]);

	return (
		<View style={tw`bg-gray-50 flex-1`}>
			<View style={tw`ios:h-${Math.floor(insets.top / 4)}`}>
				<SafeAreaView style={tw`bg-primary`} />
			</View>
			<ScrollView style={tw`flex-1`}>
				<View style={tw`flex-1 px-5 justify-center bg-gray-50 mt-5 pb-2`}>
					<View style={tw`flex-1 pt-4 justify-center`}>
						<TextInput style={tw`h-11 px-2 border border-slate-500 rounded-md`} placeholder='Pesquisar' value={search} onChangeText={setSearch}></TextInput>
					</View>
					{list.length === 0 ? (
						<View style={tw`flex-1 justify-center items-center pt-[80%]`}>
							<Text>Nenhum resutado foi encontrado</Text>
						</View>
					) : (
						<>
							{list.map(item => (
								<View style={tw`mt-5 rounded border border-slate-400`} key={item.id}>
									<Image style={tw`h-60 w-[100%]`} source={item.url} />
									<View style={tw`m-4 mt-2`}>
										<Text style={tw`text-xl`}>{item.profissao}</Text>
										<Text style={tw`text-sm pt-2`}>{item.descricao}</Text>
										<Text style={tw`text-lg pt-2`}>R$ {item.preco}</Text>
										<View style={tw`flex-row justify-between pt-2`}>
											<Text><Image style={tw`h-3 w-3 mb-5`} source={require('../../../images/pin.png')}/> {item.cidade} - {item.Estado}</Text>
											<Text><Image style={tw`h-3 w-3`} source={require('../../../images/profile.png')}/> {item.nome}</Text>
										</View>
									</View>
								</View>
							))}
						</>
					)}
				</View>
			</ScrollView>
			<Menu tw={tw} />
		</View>
	);
};

export default AddList;
