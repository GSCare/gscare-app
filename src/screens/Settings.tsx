import { PageHeader } from '@components/PageHeader';
import { UserIcon } from '@components/UserIcon';
import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export const Settings = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>()
  const handleComponent = () => {
    navigation.navigate('profileEmployee')
  }
  return (
    <View>

      <View>
        <View className='flex-col items-center mt-6'>
          <View className='h-14 w-14'>
            <UserIcon name='Tim Maia' />
          </View>
          <View>
            <Text className='ml-4 font-bold m-auto text-base'>Tim Maia</Text>
          </View>
        </View>
        <View className='mt-4 p-4'>
          <Text className='font-bold mb-4'>PROFILE</Text>
          <TouchableOpacity className='flex-col' onPress={handleComponent}>
            <View className='flex-row items-center gap-1'>
              <MaterialCommunityIcons name="account-outline" size={26} color="blue" />
              <Text className='flex-grow'>Account details</Text>
              <MaterialIcons name="arrow-forward-ios" size={15} color="gray" />
            </View>
          </TouchableOpacity>
            <View className='border-b-[1px] border-gray-300 my-4' />
          {/* <View className='flex-col'>
            <View className='flex-row items-center gap-1'>
              <MaterialCommunityIcons name="account-outline" size={26} color="blue" />
              <Text className='flex-grow'>Documents</Text>
              <MaterialIcons name="arrow-forward-ios" size={15} color="gray" />
            </View>
            <View className='border-b-[1px] border-gray-300 my-4' />
          </View> */}
          <View className='flex-row justify-between items-center'>
            <Text>Turn your location</Text>
            <Switch />
          </View>
        </View>
      </View>
    </View>
  );
};
