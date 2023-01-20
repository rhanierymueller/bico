/* eslint-disable no-negated-condition */
import * as React from 'react';
import {useState} from 'react';
import {TextInput, View, Text, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {type Style, type TailwindFn} from 'twrnc/dist/esm/types';
import tw from '../../../service/tw';

type Props = {
	tw: TailwindFn;
	title?: string;
	styleTitle?: Style;
	listStyle?: Style;
	placeholder?: string;
	style?: Style;
	inputStyle?: Style;
	content: any[];
	value: string;
	showButton?: boolean;
	setValue: React.Dispatch<React.SetStateAction<string>>;

};
const defaultInputStyle: Style = tw`flex-1 h-11 pl-3 bg-white border-0 rounded-none w-[100%] absolute`;
const defaultStyle: Style = tw`h-100% w-[70%] `;
const defaultStyleTitle: Style = tw`py-2`;

const TypeAhead = ({tw, title, placeholder, style, styleTitle, listStyle, inputStyle, content, value, showButton, setValue}: Props): JSX.Element => {
	const [show, setShow] = useState(false);

	return (
		<View style={{...defaultStyle, ...style}}>
			<Text style={{...defaultStyleTitle, ...styleTitle}}>{title}</Text>
			<View style={tw`flex-row`}>
				<TextInput placeholder={placeholder} style={{...defaultInputStyle, ...inputStyle}} onChangeText={setValue} onChange={() => {
					setShow(true);
				}}>{value}</TextInput>
			</View>

			<View style={tw`pl-[88%] pt-[6%]`}>
				<TouchableOpacity style={tw`w-5`} onPress={() => {
					setShow(!show);
				}}>
					{!show ? (
						<Image source={require('../../images/arrow-down.png')} />
					) : <Image source={require('../../images/arrow-up.png')} />}
				</TouchableOpacity>
			</View>
			{show ? (
				<View style={tw`max-h-40 bg-white`}>
					<ScrollView>
						{content.map(item => (
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							<TouchableOpacity key={item.id} onPress={() => {
								setValue(item.nome);
								setShow(false);
							}}>
								<Text style={listStyle}>{item.nome}</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
			) : null }
		</View>
	);
};

export default TypeAhead;
