import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchInput: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View className='border border-gray-300 p-2 rounded-xl mb-4 flex-row items-center gap-1'>
      <Ionicons name="search" size={24} color="black" className='mr-2' />
      <TextInput
        className='flex-1 text-base text-gray-800'
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search..."
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default SearchInput;
