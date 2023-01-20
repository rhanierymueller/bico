import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {type TailwindFn} from 'twrnc';

type Props = {
	tw: TailwindFn;
};

const Menu = ({tw}: Props) => {
	const navigation = useNavigation();
	return (
		<View style={tw`bg-white h-[8%]`}>
			<View style={tw`flex-1 px-5 justify-center`}>
				<View style={tw`flex-row items-center h-10`}>
					<TouchableOpacity style={tw`flex-1 rounded-lg h-11 justify-center items-center`}
						onPress={() => {
							navigation.navigate('AddList');
						}}>
						<Image style={tw`rounded h-5 w-5`} source = {require('../../images/menu.png')} />
						<Text style={tw`text-xs font-ubuntu`}>Inicio</Text>
					</TouchableOpacity>
					<TouchableOpacity style={tw`flex-1 rounded-lg h-11 justify-center items-center`}
						onPress={() => null}>
						<Image style={tw`rounded h-5 w-5`} source = {require('../../images/pesquisar.png')} />
						<Text style={tw`text-xs font-ubuntu`}>Pesquisar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={tw`flex-1 rounded-lg h-11 justify-center items-center`}
						onPress={() => {
							navigation.navigate('CadastroAnuncio');
						}}>
						<Image style={tw`rounded h-5 w-5`} source = {require('../../images/add.png')} />
						<Text style={tw`text-xs font-ubuntu`}>Anunciar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={tw`flex-1 rounded-lg h-11 justify-center items-center`}
						onPress={() => null}>
						<Image style={tw`rounded h-5 w-5`} source = {require('../../images/profile.png')} />
						<Text style={tw`text-xs font-ubuntu`}>Perfil</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Menu;
