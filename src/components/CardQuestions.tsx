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
    <TouchableOpacity onPress={toggleExpansion} className="p-4 bg-gray-100 rounded-lg mb-4">
      <Text className="text-xl font-bold">Saúde Mental</Text>
      <Text>{`${questions.filter((q) => q.answer !== null).length}/4 perguntas respondidas`}</Text>
      {expanded && (
        <View className="mt-4">
          {questions.map((q) => (
            <View key={q.id} className="flex-col mb-2">
              <Text className="mr-2 mb-5">{q.question}</Text>
              <View className="flex-row items-center gap-1 mb-5">
                <Checkbox
                  value={q.answer === true}
                  onValueChange={(value) => handleAnswer(q.id, value ? true : null)}
                />
                <Text className="mr-2">Sim</Text>
              </View>
              <View className="flex-row items-center gap-1 mb-5">
                <Checkbox
                  value={q.answer === false}
                  onValueChange={(value) => handleAnswer(q.id, value ? false : null)}
                />
                <Text className="mr-2">Não</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CardQuestions;
