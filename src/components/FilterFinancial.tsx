import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import FilterModal from './FilterModal';

const FilterFinancial: React.FC = () => {
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
    <View className='flex-1 justify-center items-center'>
      <TouchableOpacity
        className='p-2 rounded bg-blue-500'
        onPress={handleOpenFilterModal}
      >
        <Text className='text-white'>Abrir Filtro</Text>
      </TouchableOpacity>

      <FilterModal
        isVisible={filterModalVisible}
        onClose={handleCloseFilterModal}
        onFilter={handleFilter}
        onClearFilter={handleClearFilter}
      />
    </View>
  );
};

export default FilterFinancial;
