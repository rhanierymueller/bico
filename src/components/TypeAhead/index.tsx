import * as React from 'react';
import {TextInput, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {type Style, type TailwindFn} from 'twrnc/dist/esm/types';
import tw from '../../../service/tw';

type Props = {
	tw: TailwindFn;
	title?: string;
	styleTitle?: Style;
	placeholder?: string;
	style?: Style;
	inputStyle?: Style;
	content: any[];
};
const defaultLabelStyle: Style = tw`border border-slate-500 rounded-md h-11`;
const defaultStyle: Style = tw`h-100% w-[70%]`;
const defaultStyleTitle: Style = tw`py-2`;

const TypeAhead = ({tw, title, placeholder, style, styleTitle, inputStyle, content}: Props) => (
	<View style={{...defaultStyle, ...style}}>
		<Text style={{...defaultStyleTitle, ...styleTitle}}>{title}</Text>
		<TextInput placeholder={placeholder} style={{...defaultLabelStyle, ...inputStyle}}></TextInput>
		<View style={tw`h-50 border border-slate-500`}>
			{content.map(item => (
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				<TouchableOpacity key={item.id}>
					<Text>{item.nome}</Text>
				</TouchableOpacity>
			))}
		</View>
	</View>
);

export default TypeAhead;
