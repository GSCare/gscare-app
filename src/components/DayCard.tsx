import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

interface DayCardProps {
  day: string;
  isSelected: boolean;
  onSelect: () => void;
}

const DayCard: React.FC<DayCardProps> = ({ day, isSelected, onSelect }) => {
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return (
    <TouchableOpacity onPress={onSelect} className={`m-2 w-24 h-16 justify-center rounded-lg ${isSelected ? 'bg-indigo-600' : 'bg-white'}`}>
      <Text className={`text-center text-xl font-bold ${isSelected ? 'text-white' : 'text-black'}`}>{day}</Text>
      <Text className={`text-center text-xs font-bold ${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>{monthNames[parseInt(day) - 1]}</Text>
    </TouchableOpacity>
  );
};

const Days: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  return (
    <View className='flex-row w-[370px]'>
      <ScrollView
        horizontal showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {days.map((day, index) => (
          <DayCard
            key={index}
            day={day}
            isSelected={day === selectedDay}
            onSelect={() => setSelectedDay(prevDay => prevDay === day ? null : day)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Days;
