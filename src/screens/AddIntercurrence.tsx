import { DescPageHeader } from '@components/DescPageHeader';
import { PageHeader } from '@components/PageHeader';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const intercorrencias = [
  'Falecimento',
  'Queda do idoso',
  'Fraqueza ou falta de energia',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',
  'Motivo da Intercorrência',

  // Adicione mais intercorrências conforme necessário
];

export function AddIntercurrence() {
  const renderItem = ({ item }: any) => (
    <View className="p-4 border-b border-gray-300">
      <Text className="text-base font-semibold">{item}</Text>
    </View>
  );

  return (
    <View className='flex-1 flex-col'>
      <PageHeader title='Adicionar Intercorrência' />
      <DescPageHeader title="Selecione o motivo da intercorrência" />
      <View className='my-5'>
        <FlatList
          data={intercorrencias}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}
