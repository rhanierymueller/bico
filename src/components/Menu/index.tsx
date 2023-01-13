import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {type TailwindFn} from 'twrnc';

type Props = {
	tw: TailwindFn;
};

const Menu = ({tw}: Props) => (
	<View style={tw`bg-white h-[8%]`}>
		<View style={tw`flex-1 px-5 justify-center`}>
			<View style={tw`flex-row items-center h-10`}>
				<TouchableOpacity style={tw`flex-1 rounded-lg h-11 justify-center items-center`}
					onPress={() => null}>
					<Image style={tw`rounded h-5 w-5`} source = {require('C:/Users/Rhaniery/Documents/app-bico/bico/src/images/menu.png')} />
					<Text style={tw`text-xs`}>Inicio</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex-1 rounded-lg h-11 justify-center items-center`}
					onPress={() => null}>
					<Image style={tw`rounded h-5 w-5`} source = {require('C:/Users/Rhaniery/Documents/app-bico/bico/src/images/pesquisar.png')} />
					<Text style={tw`text-xs`}>Pesquisar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex-1 rounded-lg h-11 justify-center items-center`}
					onPress={() => null}>
					<Image style={tw`rounded h-5 w-5`} source = {require('C:/Users/Rhaniery/Documents/app-bico/bico/src/images/add.png')} />
					<Text style={tw`text-xs`}>Anunciar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex-1 rounded-lg h-11 justify-center items-center`}
					onPress={() => null}>
					<Image style={tw`rounded h-5 w-5`} source = {require('C:/Users/Rhaniery/Documents/app-bico/bico/src/images/profile.png')} />
					<Text style={tw`text-xs`}>Profile</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
);

export default Menu;
