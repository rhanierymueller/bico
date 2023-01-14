import {useNavigation} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from '../../../../service/tw';
import {Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ProfessionsMock} from '../../../Mocks/ProfessionsMock';
import {ScrollView} from 'react-native-gesture-handler';

const CadastroAnuncio = () => {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();

	return (
		<Fragment>
			<View style={tw`ios:h-${Math.floor(insets.top / 4)}`}>
				<SafeAreaView style={tw`flex-0 bg-red-700`} />
			</View>
			<SafeAreaView style={tw`flex-1 bg-red-700`}>

				<View style={tw`mt-15 h-[15%] bg-white justify-center`}>
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

				<View style={tw`flex-1 bg-slate-100 pb-25`}>
					<View style={tw`mt-10 justify-center items-center`}>
						<Text style={tw`text-slate-600 font-normal text-xl`}>Que tipo de serviço</Text>
						<Text style={tw`text-slate-600 font-normal text-xl`}>deseja anunciar?</Text>
					</View>
					<View style={tw`py-2 mt-5 items-center justify-center`}>
						<TextInput style={tw`h-16 px-25 border-solid border-[0.50] border-slate-400 rounded-md`} placeholder='Escolha seu serviço'></TextInput>
					</View>
					<View style={tw`py-10 justify-between`}>
						<ScrollView>
							{ProfessionsMock.map(item => (
								<View style={tw`bg-white py-5 mx-10 pr-10 mb-5 items-center`} key={item.id}>
									<TouchableOpacity style={tw`rounded`}>
										<Text style={tw`pl-10 font-semibold text-xl`}>{item.nome}</Text>
									</TouchableOpacity>
								</View>
							))}
						</ScrollView>
					</View>
				</View>
			</SafeAreaView>
		</Fragment>
	);
};

export default CadastroAnuncio;
