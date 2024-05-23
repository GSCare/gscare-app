import React, { useEffect, useState } from 'react';
import { Modal, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export const AddModal = ({ visible, onClose, color }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const items = ['Adicionar Intercorrência', 'Adicionar Compromisso']; // Adicione seus componentes aqui
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleComponent() {
    if(selectedItem=="Adicionar Intercorrência")navigation.navigate('addIntercurrence')
    if(selectedItem=="Adicionar Compromisso")navigation.navigate('addAppointment')
    setIsModalVisible(false);
  }
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleBackgroundPress = () => {
    setIsModalVisible(false);
  };

  const handleModalPress = () => {
    // Faz nada, apenas não deixa o modal fechar
  };

  const handleItemPress = (item: string) => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
    console.log('Item escolhido:', item);
  };

  useEffect(() => {
    if (!isModalVisible) {
      setSelectedItem(null); // Limpa a escolha quando o modal fecha
    }
  }, [isModalVisible]);

  const handleSave = () => {
    console.log('Items selecionados:', selectedItem);
    setIsModalVisible(false);
  };

  return (
    <View>
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          toggleModal();
        }}
      >
        <TouchableWithoutFeedback onPress={handleBackgroundPress}>
          <View className="flex-1 justify-center items-center bg-[#0000007F]">
            <TouchableWithoutFeedback onPress={handleModalPress}>
              <View className="bg-white p-10 justify-center rounded-md w-80 h-auto max-h-[80%]">

                {items.map((item) => (
                  <TouchableOpacity key={item} onPress={() => handleItemPress(item)} className="flex-row items-center my-2">
                    <View className={`w-5 h-5 rounded-full border ${selectedItem === item ? 'bg-blue-500' : 'border-gray-500 '}`}></View>
                    <Text className="ml-2 text-base">{item}</Text>
                  </TouchableOpacity>
                ))}

                <View className="flex-row justify-between mt-4">
                  <TouchableOpacity onPress={handleBackgroundPress}>
                    <Text className="text-blue-500 text-base">Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleComponent}>
                    <Text className="text-blue-500 text-base">Avançar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={32}
        color={color}
        onPress={toggleModal}
      />
    </View>
  );
};
