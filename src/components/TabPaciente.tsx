import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PercentMedication } from './PercentMedication';
import { CaseCompletion } from './CaseCompletion';

interface TabProps {
  title: string;
  content: JSX.Element;
}

const tabs: TabProps[] = [
  { title: 'Visão Geral', content: <View className='flex-row mt-5 justify-around'><PercentMedication progress={60} /><CaseCompletion progress={20} /></View> },
  { title: 'Histórico', content: <Text>Conteúdo do Histórico</Text> },
  { title: 'Diagnóstico', content: <Text>Conteúdo do Diagnóstico</Text> },
  { title: 'Tratamento', content: <Text>Conteúdo do Tratamento</Text> },
];

export const TabPatient = () => {
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
