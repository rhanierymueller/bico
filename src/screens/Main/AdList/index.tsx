import {useNavigation} from '@react-navigation/native';
import React, {Fragment, useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import tw from '../../../../service/tw';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AddListMock} from '../../../../src/Mocks/AdListMock';
import {ScrollView} from 'react-native-gesture-handler';
import Menu from '../../../components/Menu';

const AddList = () => {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();

	return (
		<View style={tw`flex-1`}>
			<View style={tw`ios:h-${Math.floor(insets.top / 4)}`}>
				<SafeAreaView style={tw`bg-red-700`} />
			</View>
			<SafeAreaView style={tw`flex-1 bg-red-700`}>
				<ScrollView style={tw`flex-1`}>
					<View style={tw`flex-row pl-[75%] top-15 items-center`}>
						<TouchableOpacity style={tw`flex-row justify-center items-center bg-red-700`}
							onPress={() => {
								navigation.navigate('Login');
							}}>
							<Text style={tw`text-white`}>Logout</Text>
							<Image style={tw`rounded h-8 w-8`} source = {require('C:/Users/Rhaniery/Documents/app-bico/bico/src/images/logout.png')} />
						</TouchableOpacity>
					</View>
					<View style={tw`flex-1 px-5 justify-center bg-gray-50 mt-20 pb-2`}>
						<View style={tw`flex-1 px-5 pt-4 justify-center`}>
							<View style={tw`flex-row items-center h-10 `}>
								<TouchableOpacity style={tw`flex-1 flex-row rounded-lg h-11 justify-center items-center`}
									onPress={() => null}>
									<Image style={tw`rounded h-5 w-5`} source = {require('C:/Users/Rhaniery/Documents/app-bico/bico/src/images/pesquisar.png')} />
									<Text style={tw`pl-3`}>Pesquisar</Text>
								</TouchableOpacity>
								<TouchableOpacity style={tw`flex-1 flex-row rounded-lg h-11 justify-center items-center`}
									onPress={() => null}>
									<Image style={tw`rounded h-5 w-5`} source = {require('C:/Users/Rhaniery/Documents/app-bico/bico/src/images/ordenar.png')} />
									<Text style={tw`pl-3`}>Ordenar</Text>
								</TouchableOpacity>
							</View>
						</View>
						{AddListMock.map(item => (
							<View style={tw`mt-5 rounded border border-slate-400`} key={item.id}>
								<Image style={tw`h-60 w-[100%]`} source={item.url} />
								<View style={tw`m-4 mt-2`}>
									<Text style={tw`text-xl`}>{item.profissao}</Text>
									<Text style={tw`text-sm pt-2`}>{item.descricao}</Text>
									<Text style={tw`text-lg pt-2`}>R$ {item.preco}</Text>
									<View style={tw`flex-row justify-between pt-2`}>
										<Text>{item.cidade} - {item.Estado}</Text>
										<Text>{item.nome}</Text>
									</View>
								</View>
							</View>
						))}
					</View>
				</ScrollView>
				<Menu tw={tw} />
			</SafeAreaView>
		</View>
	);
};

export default AddList;
