import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'expo-checkbox';

interface Question {
  id: number;
  question: string;
  answer: boolean | null;
}

const CardQuestions: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, question: 'Você se sente ansioso com frequência?', answer: null },
    { id: 2, question: 'Você se sente triste com frequência?', answer: null },
    { id: 3, question: 'Você tem dificuldade em dormir?', answer: null },
    { id: 4, question: 'Você tem pensamentos negativos frequentes?', answer: null },
  ]);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const handleAnswer = (id: number, answer: boolean | null) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, answer: q.answer === answer ? null : answer } : q
    );
    setQuestions(updatedQuestions);
  };

  return (
    <View className='mb-8 flex-1'>
      <TouchableOpacity onPress={toggleExpansion} className="p-4 bg-gray-200 rounded-t-xl rounded-b-sm">
        <Text className="text-xl font-bold">Saúde Mental</Text>
        <Text>{`${questions.filter((q) => q.answer !== null).length}/4 perguntas respondidas`}</Text>
      </TouchableOpacity>
      {expanded && (
        <View className="p-4 bg-gray-200 rounded-b-xl">
          {questions.map((q) => (
            <View key={q.id} className="flex-col mb-2">
              <Text className="mr-2 text-base">{q.question}</Text>
              <View className="flex-row items-center gap-1 mb-5 mt-2">
                <Checkbox
                  className='w-6 h-6'
                  value={q.answer === true}
                  onValueChange={(value) => handleAnswer(q.id, value ? true : null)}
                />
                <Text className="mr-2 text-base">Sim</Text>
              </View>
              <View className="flex-row items-center gap-1 mb-5">
                <Checkbox
                  className='w-6 h-6'
                  value={q.answer === false}
                  onValueChange={(value) => handleAnswer(q.id, value ? false : null)}
                />
                <Text className="mr-2 text-base">Não</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default CardQuestions;
