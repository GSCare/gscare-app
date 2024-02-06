import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons';

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  onFilter: (startDate: string, endDate: string) => void;
  onClearFilter: () => void;
}

const FilterModalData: React.FC<FilterModalProps> = ({ isVisible, onClose, onFilter, onClearFilter }) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleFilterPress = () => {
    // Adicione aqui a lógica para aplicar o filtro com as datas selecionadas
    onFilter(startDate, endDate);
    onClose();
  };

  const handleClearFilterPress = () => {
    // Adicione aqui a lógica para limpar o filtro
    setStartDate('');
    setEndDate('');
    onClearFilter();
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View className='flex-1 justify-end'>
        <View className='bg-white p-4 gap-4 rounded-tl-[30] rounded-tr-[9]'>
          <View className='items-center justify-center'>
            <Octicons name="horizontal-rule" size={30} color="gray" />
          </View>
          <View className='flex-row justify-between items-center'>
            <Text className='text-black text-xl font-bold'>Datas</Text>
            <TouchableOpacity
              onPress={handleFilterPress}
            >
              <Text className='text-[#ff9924] underline decoration-[#2f2a25] font-bold text-sm'>Fechar</Text>
            </TouchableOpacity>
          </View>
          <Text className='text-black text-base font-bold'>Útimos períodos</Text>
          <View className='flex-row gap-2 h-10'>
            <View className='border-[1px] border-gray-300 w-20 rounded-full'>
              <Text className='m-auto'>7 dias</Text>
            </View>
            <View className='border-[1px] border-gray-300 w-20 rounded-full'>
              <Text className='m-auto'>15 dias</Text>
            </View>
            <View className='border-[1px] border-gray-300 w-20 rounded-full'>
              <Text className='m-auto'>30 dias</Text>
            </View>
            <View className='border-[1px] border-gray-300 w-20 rounded-full'>
              <Text className='m-auto'>90 dias</Text>
            </View>
          </View>
          <Text className='text-black text-base font-bold'>Período específico</Text>
          <View className='flex-row gap-2'>
            <View className='flex-col flex-1 h-20 gap-1'>
              <Text className=''>Data Inicial</Text>
              <TextInput
                className='bg-[#dddddd6b] rounded-lg flex-1 p-4 font-bold'
                value={startDate}
                onChangeText={(text) => setStartDate(text)}
              />
            </View>
            <View className='flex-col flex-1 h-20 gap-1'>
              <Text className=''>Data Final</Text>
              <TextInput
                className='bg-[#dddddd6b] rounded-lg flex-1 p-4 font-bold'
                value={endDate}
                onChangeText={(text) => setEndDate(text)}
              />
            </View>
          </View>
          <View className='items-center'>
            <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. adipisicing elit. adipisicing elit. </Text>
          </View>
          <View className='flex-col gap-2 '>
            <TouchableOpacity
              className='p-2 bg-[#ff9924] rounded mb-2'
              onPress={handleFilterPress}
            >
              <Text className='text-white m-auto text-lg'>Filtrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className='border-[1px] border-gray-300 p-2 rounded'
              onPress={handleClearFilterPress}
            >
              <Text className='m-auto text-lg'>Limpar Filtro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModalData;
