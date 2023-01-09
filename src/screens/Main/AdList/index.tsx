import {useNavigation} from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import tw from '../../../../service/tw';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {AddListMock} from '../../../../src/Mocks/AdListMock';
import { ScrollView } from 'react-native-gesture-handler';

const  AddList = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

    return (
     <View style={tw`flex-1`}>
        <View style={tw`ios:h-${Math.floor(insets.top / 4)}`}>
          <SafeAreaView style={tw`bg-red-700`} />
        </View>
        <SafeAreaView style={tw`flex-1 bg-red-700`}>
          <ScrollView style={tw`flex-1`}>
            <View style={tw`flex-row pl-5 top-15 items-center`}>
              <TouchableOpacity style={tw`rounded-lg h-11 justify-center items-center bg-red-700`}
                  onPress={() => navigation.navigate('Login')}>
                <Text style={tw`text-white`}>Voltar</Text>
              </TouchableOpacity>
              <Text style={tw`text-white text-sm pl-5`}>Pesquisa</Text>
            </View>
              <View style={tw`flex-1 px-5 justify-center bg-white mt-20`}>            
                  {AddListMock.map((item, idx) => (
                   <View style={tw`mt-5 rounded border border-slate-400 `}> 
                      <Image style={tw`h-40 w-[100%]`} source={item.url} /> 
                      <View style={tw`m-4 mt-2`}>
                        <Text style={tw`text-xl`}>{item.profissao}</Text>
                        <Text style={tw`text-xs pt-2`}>{item.descricao}</Text>
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
        </SafeAreaView>
      </View>
    )
  }

export default AddList;