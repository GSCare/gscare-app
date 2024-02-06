import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, TextInput, ScrollView } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import CashFlow from './fluxo-de-caixa.svg';
import ItemComponent from './ItemTypes';



interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  onFilter: (startDate: string, endDate: string) => void;
  onClearFilter: () => void;
}

const FilterModalTypes: React.FC<FilterModalProps> = ({ isVisible, onClose, onFilter, onClearFilter }) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [checked, setChecked] = useState(false);
  const [checkedExit, setCheckedExit] = useState(false);

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

  const handleCheckBoxToggle = () => {
    setChecked(!checked);
  };

  const handleCheckBoxExitToggle = () => {
    setCheckedExit(!checkedExit)
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View className='flex-1 justify-start'>
        <View className='bg-white p-4 gap-4 rounded-tl-[30] rounded-tr-[9] h-full'>
          <View className='items-center justify-center'>
            <Octicons name="horizontal-rule" size={30} color="gray" />
          </View>
          <View className='flex-row justify-between items-center mb-5'>
            <Text className='text-black text-xl font-bold'>Categorias</Text>
            <TouchableOpacity
              onPress={handleFilterPress}
            >
              <Text className='text-[#ff9924] underline decoration-[#2f2a25] font-bold text-sm'>Fechar</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className='flex-row justify-between'>
              <View className='flex-row items-center gap-1'>
                <CashFlow width={20} height={20} />
                <Text className='text-black text-base font-bold'>Entradas</Text>
              </View>
              <Checkbox
                value={checked}
                color={checked ? "#ff9924" : undefined}
                onValueChange={handleCheckBoxToggle}
              />
            </View>
            <View className=' border-b-2 border-b-gray-200 mt-5'></View>
            <View className='flex-row gap-2 my-5 flex-wrap'>
              <View>
                <ItemComponent label='Boletos' width={100} checked={checked}/>
              </View>
              <View>
                <ItemComponent label='Pix' width={100} checked={checked}/>
              </View>
              <View>
                <ItemComponent label='Estorno' width={100} checked={checked}/>
              </View>
              <View>
                <ItemComponent label='Vendas' width={100} checked={checked}/>
              </View>
            </View>
            <View className='flex-row justify-between'>
              <View className='flex-row items-center gap-1'>
                <CashFlow width={20} height={20} />
                <Text className='text-black text-base font-bold'>Saídas</Text>
              </View>
              <Checkbox
                value={checkedExit}
                color={checkedExit ? "#ff9924" : undefined}
                onValueChange={handleCheckBoxExitToggle}
              />
            </View>
            <View className=' border-b-2 border-b-gray-200 my-5'></View>
            <View className='flex-row gap-2 h-full flex-wrap'>
              <View>
                <ItemComponent label='Alimentação' width={100} checked={checkedExit}/>
              </View>
              <View>
                <ItemComponent label='Contas' width={100} checked={checkedExit}/>
              </View>
              <View>
                <ItemComponent label='Imposto, juros e multa' width={160} checked={checkedExit}/>
              </View>
              <View>
                <ItemComponent label='Outras saídas' width={110} checked={checkedExit}/>
              </View>
              <View>
                <ItemComponent label='Pagamento' width={100} checked={checkedExit}/>
              </View>
            </View>
          </ScrollView>
          <View className=' border-b-2 border-b-gray-200 mr-2'></View>
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

export default FilterModalTypes;
