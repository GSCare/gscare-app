import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ModalProfilePatient } from './ModalProfilePatient';

interface PatientCardProps {
  patientName: string;
  appointmentTimeStart: string;
  appointmentTimeEnd: string;
  appointmentDate: string;
  isSelected: boolean;
  onSelect: () => void;
}

const PatientCardReport: React.FC<PatientCardProps> = ({ patientName, appointmentTimeStart, appointmentTimeEnd, appointmentDate, isSelected, onSelect }) => {
  const [showModal, setShowModal] = useState(false);
  const handleBackgroundPress = () => {
    setShowModal(true);
  };

  const handlePress = () => {
    onSelect()
    handleBackgroundPress()
    console.log("entrou aqui");

  };
  return (
    <View>
      <View className='flex-row'>
        <View className='w-14 justify-center'>
          <Text className='text-center font-bold text-xs transform rotate-90 text-gray-300'>{appointmentDate}</Text>
        </View>
        <TouchableOpacity onPress={handlePress} className={`m-2 w-64 h-20 flex-row rounded-2xl  bg-white`}>
          <View className='flex-1 justify-center pl-2 ml-3'>
            <Text className={`text-lg font-bold text-gray-600`}>{patientName}</Text>
            <View className='flex-row'>
              <Text className={`text-sm text-gray-400`}>{appointmentTimeStart} - {appointmentTimeEnd}</Text>
            </View>
          </View>
        </TouchableOpacity>


      </View >
      {showModal && (
        <ModalProfilePatient sholdShowModal={showModal} />
      )}
    </View>
  );
};
export default PatientCardReport
