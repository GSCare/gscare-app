import { DescPageHeader } from '@components/DescPageHeader';
import { PageHeader } from '@components/PageHeader';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HelpScreen = () => {
  const contatos = [
    { tipo: 'Parente', nome: 'Mãe', telefone: '(XX) XXXX-XXXX' },
    { tipo: 'Parente', nome: 'Pai', telefone: '(XX) XXXX-XXXX' },
    { tipo: 'Emergência', nome: 'Polícia', telefone: '190' },
    { tipo: 'Emergência', nome: 'Ambulância', telefone: '192' },
    { tipo: 'Parente', nome: 'Lipe', telefone: '(XX) XXXX-XXXX' },
    { tipo: 'Parente', nome: 'Franco', telefone: '(XX) XXXX-XXXX' },
    { tipo: 'Parente', nome: 'Pai', telefone: '(XX) XXXX-XXXX' },
    { tipo: 'Parente', nome: 'Pai', telefone: '(XX) XXXX-XXXX' },
    { tipo: 'Parente', nome: 'Pai', telefone: '(XX) XXXX-XXXX' },
    { tipo: 'Parente', nome: 'Pai', telefone: '(XX) XXXX-XXXX' },
    { tipo: 'Parente', nome: 'Pai', telefone: '(XX) XXXX-XXXX' },
  ];

  return (
    <View className='flex-1 flex-col'>
      <PageHeader title='Me ajuda' />
      <View className='p-4 my-5'>
        <ScrollView>
          {contatos.map((contato, index) => (
            <View key={index} className='bg-white rounded-md p-4 m-4 shadow-md shadow-black mb-4 flex-row items-center'>
              <Icon name='phone' size={20} color='black' style={{ marginRight: 8 }} />
              <View>
                <Text className='text-lg font-semibold mb-1'>{contato.nome}</Text>
                <Text className='text-base'>{contato.telefone}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HelpScreen;
