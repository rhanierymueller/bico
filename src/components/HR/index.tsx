import * as React from 'react';
import {View} from 'react-native';
import {Style, TailwindFn} from 'twrnc/dist/esm/types';

type Props = {
  tw: TailwindFn;
  color?: string;
  style?: Style;
};

const HR = ({tw, color, style}: Props) => {
  const defaultStyle = tw`h-0.5 bg-slate-300 w-full`;
  const colorStyle = color ? tw`bg-${color}` : tw``;
  return <View style={{...defaultStyle, ...style, ...colorStyle}} />;
};

export default HR;