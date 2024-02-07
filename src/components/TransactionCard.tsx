import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CashFlow from './fluxo-de-caixa.svg'
import { Entypo } from '@expo/vector-icons';
import { MonthFinancial } from './MonthFinancial';
interface Transaction {
  month: string;
  date: string;
  balance: string;
  type: string;
  value: string;
  name: string;
  category: string;
}

const TransactionCard: React.FC<Transaction> = ({ month, date, balance, type, value, name, category }) => {
  return (
    <TouchableOpacity className='rounded-lg p-4 mb-4'>
      <View>
      <MonthFinancial month={month} />
        <View className='flex-row justify-between'>
          <Text>{date}</Text>
          <Text>Saldo do dia R$ {balance}</Text>
        </View>
        <View className=' border-b-2 border-b-gray-300 w-full my-3'></View>
      </View>
      <View className='flex-row items-center'>
        <CashFlow width={30} height={30} />
        <View className='flex-row items-center'>
          <View className=' border-l-2 border-l-gray-200 h-[40] mx-4'></View>
          <View className='flex-col'>
            <Text className='text-sm font-bold mr-2'>{type}</Text>
            <Text className='text-sm font-bold'>-R$ {value}</Text>
            <Text className='text-sm text-gray-500'>{name}</Text>
            <Text className='text-sm'>{category}</Text>
          </View>
          <View className='ml-24'>
            <Entypo name="chevron-right" size={24} color="#FF9924"/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;