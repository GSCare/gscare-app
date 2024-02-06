import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import FilterModalTypes from './FilterModalTypes';

import { AntDesign } from '@expo/vector-icons';


const FilterFinancialType: React.FC = () => {
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);

  const handleOpenFilterModal = () => {
    setFilterModalVisible(true);
  };

  const handleCloseFilterModal = () => {
    setFilterModalVisible(false);
  };

  const handleFilter = (startDate: string, endDate: string) => {
    // Lógica para aplicar o filtro com as datas selecionadas
    console.log('Filtrando com datas:', startDate, endDate);
  };

  const handleClearFilter = () => {
    // Lógica para limpar o filtro
    console.log('Limpando filtro');
  };

  return (
    <View className='my-4 mx-2'>
      <View className='flex-row gap-4'>
        <View>
          <TouchableOpacity
            className='border-[1px] border-gray-300 w-20 rounded-full p-2 flex-row'
            onPress={handleOpenFilterModal}>
            <Text className='m-auto'>Tipos</Text>
            <View className='m-auto'>
              <AntDesign name="down" size={15} color="black" />
            </View>
          </TouchableOpacity>

          <FilterModalTypes
            isVisible={filterModalVisible}
            onClose={handleCloseFilterModal}
            onFilter={handleFilter}
            onClearFilter={handleClearFilter}
          />
        </View>
      </View>
    </View>
  );
};

export default FilterFinancialType;
