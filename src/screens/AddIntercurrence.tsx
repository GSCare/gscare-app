// import { DescPageHeader } from '@components/DescPageHeader';
// import { PageHeader } from '@components/PageHeader';
// import React from 'react';
// import { FlatList, Text, View } from 'react-native';

// const intercorrencias = [
//   'Falecimento',
//   'Queda do idoso',
//   'Fraqueza ou falta de energia',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',
//   'Motivo da Intercorrência',

//   // Adicione mais intercorrências conforme necessário
// ];

// export function AddIntercurrence() {
//   const renderItem = ({ item }: any) => (
//     <View className="p-4 border-b border-gray-300">
//       <Text className="text-base font-semibold">{item}</Text>
//     </View>
//   );

//   return (
//     <View className='flex-1 flex-col'>
//       <PageHeader title='Adicionar Intercorrência' />

//       <View className='my-5'>
//         <FlatList
//           data={intercorrencias}
//           renderItem={renderItem}
//           keyExtractor={(item) => item}
//         />
//       </View>
//     </View>
//   );
// }
import { DescPageHeader } from '@components/DescPageHeader';
import { PageHeader } from '@components/PageHeader';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';


const categorias = [
  'Crítica',
  'Grave',
  'Moderada',
  'Leve',
];

export function AddIntercurrence() {
  const [categoria, setCategoria] = useState('');
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSalvar = () => {
    // Implemente o código para salvar o compromisso
  };

  return (
    <View className='flex-1 flex-col'>
      <PageHeader title='Adicionar Intercorrência' />

      <View className='p-4'>
        <Text className='text-base mb-1 font-bold'>Categoria:</Text>
        <View className='border border-gray-300 p-2 rounded'>
          <SelectDropdown
            data={categorias}
            onSelect={(selectedItem, index) => setCategoria(selectedItem)}
            defaultButtonText='Selecione a categoria'
            buttonTextStyle={{ fontSize: 16 }}
            renderDropdownIcon={() => <AntDesign name="down" size={16} color="black" />}
            dropdownStyle={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, width:320}}
          />
        </View>
      </View>
      <View className='p-4'>
        <Text className='text-base mb-1 font-bold'>Nome da Intercorrência:</Text>
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome da Intercorrência"
          className='border border-gray-300 p-2 rounded'
        />
      </View>
      <View className='p-4'>
        <Text className='text-base mb-1 font-bold'>Data da Intercorrência:</Text>
        <TextInput
          value={data}
          onChangeText={setData}
          placeholder="Digite a data da Intercorrência"
          className='border border-gray-300 p-2 rounded'
        />
      </View>
      <View className='p-4'>
        <Text className='text-base mb-1 font-bold'>Descrição:</Text>
        <TextInput
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Digite a descrição do compromisso"
          multiline
          numberOfLines={4}
          className='border border-gray-300 p-2 rounded'
        />
      </View>
      <TouchableOpacity onPress={handleSalvar} className='bg-blue-500 rounded p-2 m-4'>
        <Text className='text-white text-center text-lg'>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

