import { CardProfilePatient } from '@components/CardProfilePatient';
import { PageHeader } from '@components/PageHeader';
import { TabPatient } from '@components/TabPaciente';
import React from 'react';
import { View } from 'react-native';

const ProfilePaciente = () => {

  return (
    <View className='flex-1'>

      <View className='p-4'>
      <CardProfilePatient />
      </View>
      <View className='m-3 mt-10 flex-1'>
        <TabPatient />
      </View>
    </View>
  );
};

export default ProfilePaciente;
