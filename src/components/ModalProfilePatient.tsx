import { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { UserIcon } from "./UserIcon";
import { useNavigation } from "@react-navigation/native";
import { StackHomeNavigatorRoutesProps } from "@routes/stackHome.routes";
import { StackDailyReportNavigatorRoutesProps } from "@routes/stackDailyReport.routes";

export function ModalProfilePatient({sholdShowModal}:any) {
  const [showModal, setShowModal] = useState(sholdShowModal);
  const handleBackgroundPress = () => {
    setShowModal(false);
  };

  const handleModalPress = () => {
    // Faz nada, apenas nao deixa o modal fechar
  };

  const navigation = useNavigation<any>()
  const handleComponent = () => {
    navigation.navigate('profilePaciente')
  }
  return (
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
                  onPress={handleComponent}
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
  );
}