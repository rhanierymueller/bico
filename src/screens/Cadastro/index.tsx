import {useNavigation} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from '../../../service/tw';
import {Image} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import HR from '../../components/HR';

const Cadastro = () => {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();
	const customLabelLogin = (
		<Text style={tw`text-primary font-semibold pl-1`}>Entrar</Text>
	);
	const customerLabelHelper = (
		<Text style={tw`text-primary font-semibold pl-1`}>Fale com a gente</Text>
	);

	return (
		<Fragment>
			<View style={tw`ios:h-${Math.floor(insets.top / 4)}`}>
				<SafeAreaView style={tw`flex-0 bg-primary`} />
			</View>
			<View style={tw`flex-1 px-10 justify-center bg-white`}>
				<Text style={tw`text-2xl`}>Crie sua conta na Bico! ;)</Text>
				<TouchableOpacity style={tw`rounded h-11 justify-center items-center bg-facebook-color mt-4`}
					onPress={() => {
						navigation.navigate('Menu');
					}}>
					<View style={tw`flex-row justify-between items-center`}>
						<Image style={tw`rounded h-5 w-5 right-14`} source = {require('../../images/facebook.png')} />
						<Text style={tw`text-white`}>Continuar com o Facebook</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={tw`border border-slate-300 rounded h-11 justify-center items-center bg-white mt-4`}
					onPress={() => {
						navigation.navigate('Menu');
					}}>
					<View style={tw`flex-row justify-between items-center `}>
						<Image style={tw`rounded h-5 w-5 right-14`} source = {require('../../images/gmail.png')} />
						<Text style={tw`pr-7`}>Continuar com Google</Text>
					</View>
				</TouchableOpacity>
				<View style={tw`mt-5 flex-row justify-center items-center`}>
					<HR style={tw`w-45 h-[0.2] mt-1`} tw={tw} />
					<Text style={tw`mx-1 text-slate-600`}>ou</Text>
					<HR style={tw`w-45 h-[0.2] mt-1`} tw={tw} />
				</View>
				<View style={tw`py-7`}>
					<Text>E-mail</Text>
					<TextInput style={tw`border-[0.50] border-solid rounded-md h-11 border-slate-400 pl-2 mt-2 mb-2`} />
					<Text>Senha</Text>
					<TextInput style={tw`border-[0.50] border-solid rounded-md h-11 border-slate-400 pl-2 mt-2`} />
				</View>
				<TouchableOpacity style={tw`rounded-lg h-11 justify-center items-center bg-primary`}
					onPress={() => {
						navigation.goBack();
					}}>
					<Text style={tw`text-white`}>Criar Conta</Text>
				</TouchableOpacity>
				<View style={tw`flex-row justify-center pt-5`}>
					<Text>Já tem uma conta?</Text>
					<TouchableOpacity onPress={() => {
						navigation.goBack();
					}}>{customLabelLogin}</TouchableOpacity>
				</View>
			</View>
			<View style={tw`justify-center items-center bg-white pb-5 bg-white`}>
				<HR tw={tw} style={tw`w-[125%] h-[0.2]`}/>
				<View style={tw`flex-row justify-center items-center pt-5`}>
					<Text style={tw`mx-1`}>Precisa de ajuda?</Text>
					<TouchableOpacity>{customerLabelHelper}</TouchableOpacity>
				</View>
			</View>
		</Fragment>
	);
};

export default Cadastro;
