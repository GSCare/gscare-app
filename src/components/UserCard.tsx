import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { UserIcon } from './UserIcon';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

const UserCard = () => {
  const [showModal, setShowModal] = useState(false)
  const handleBackgroundPress = () => {
    setShowModal(false);
  };

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleModalPress = () => {
    navigation.navigate("profilePaciente");
  };
  return (
    <View className="bg-white p-4 rounded-2xl shadow-2xl h-full">
      <View className="flex-row">
        <View className='w-20 h-20 m-auto mr-4'>
          <UserIcon
            name='Jhon Doe'
          />
        </View>
        <View className='flex-1'>
          <Text className="text-lg font-semibold">Jhon Doe</Text>
          <Text>jhondoe@email.com</Text>
          <Text className='mb-2'>1 949 555 0198</Text>
          <Text className="text-gray-600">Rua dos bobos N*0</Text>
          <Text className="text-gray-600">Apartamento Rios de Luz 151C Bloco 3</Text>
        </View>
      </View>
      <View className="flex-row justify-end">
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg mt-2" onPress={() => setShowModal(true)}>
          <Text className='text-white text-sm'>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
      {showModal && (
        <Modal
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <TouchableWithoutFeedback onPress={handleBackgroundPress}>
            <View className="flex flex-col justify-center items-center h-full bg-[#0000007F]">
              <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                <View className="bg-white p-5 flex-row mx-16 rounded-lg">
                  <View className='w-20 h-20 mr-4'>
                    <UserIcon
                      name='Luis Silva'
                    />
                  </View>
                  <View className="flex flex-col">
                    <Text className="text-lg font-bold">Luís Felipe Silva</Text>
                    <Text className="text-gray-500">Minas Gerais</Text>
                    <Text className="text-gray-500">12:00</Text>
                    <Text className="text-gray-500">13/05/2024</Text>
                    <Text className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur quas veritatis.</Text>
                    <TouchableOpacity
                      onPress={handleModalPress}
                      className="bg-blue-500 py-2 mt-4 rounded-full items-center"
                    >
                      <Text className="text-white">Ver perfil completo</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

export default UserCard;
