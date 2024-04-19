import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PercentMedication } from './PercentMedication';
import { CaseCompletion } from './CaseCompletion';
import { Assentments } from './Assentments';
import { MessageCard } from './MessageCard';
import { AddFile } from './AddFile';
import { Compliments } from './Compliments';
import { AvaliationCard } from './AvaliationCard';

interface TabProps {
  title: string;
  content: JSX.Element;
}

const tabs: TabProps[] = [
  {
    title: 'Visão Geral',
    content:
      <View>
        <View className='p-4'>
          <Compliments />
        </View>
        <View>
          <Text className='text-xl font-bold p-4'>Avaliações</Text>
          <AvaliationCard />
        </View>
      </View>
  },
  {
    title: 'Histórico',
    content:
      <Text>Conteúdo do Histórico</Text>
  },
  {
    title: 'Diagnóstico',
    content:
      <View>
        <MessageCard title='Ansiedade - GAD 7'
          message='Albert came in this Monday with a distinctive behavioral improvement. We talked about his vacation last month.'
          color='yellow'
        />
        <MessageCard title='Ansiedade - GAD 7'
          message='Albert came in this Monday with a distinctive behavioral improvement. We talked about his vacation last month.'
          color='blue'
        />
      </View>
  },
  {
    title: 'Tratamento',
    content:
      <View className='mt-20'>
        <AddFile />
      </View>
  },
];

export const TabEmployee = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: index === activeTab ? 'transparent' : '#d6dce4',
              width: `${100 / tabs.length}%`, // Define a largura com base no número de guias
              maxWidth: 100, // Define a largura máxima para garantir que cada guia tenha o mesmo tamanho
            }}
            onPress={() => setActiveTab(index)}
          >
            <Text style={{ fontSize: 16, color: index === activeTab ? 'black' : '#babfc6', fontWeight: index === activeTab ? 'bold' : 'normal' }}>
              {tab.title}
            </Text>

            {index === activeTab && (
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: 'blue',
                  width: 25,
                  position: 'absolute',
                  bottom: 0,
                  left: 10,
                }}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View style={{}}>
        {tabs[activeTab].content}
      </View>
    </View>
  );
};
