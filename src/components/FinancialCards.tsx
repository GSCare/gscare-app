import { Text, View } from "react-native";
import { PageHeader } from "./PageHeader";
import { DescPageHeader } from "./DescPageHeader";


export function FinancialCards(){
  return(
<>
    <View className="flex-row">
      {/* Card Enviado */}
      <View className="flex-1 p-4 m-2 bg-white rounded shadow-md shadow-black">
        <Text className="text-gray-300 text-lg font-bold">Enviado</Text>
        <Text className="text-blue-400 text-xl font-bold">R$ 1000,00</Text>
      </View>

      {/* Card Aprovado */}
      <View className="flex-1 p-4 m-2 bg-white rounded shadow-md shadow-black">
        <Text className="text-gray-300 text-lg font-bold">Aprovado</Text>
        <Text className="text-teal-400 text-xl font-bold">R$ 750,00</Text>
      </View>
    </View>

    <View className="flex-row">
      {/* Card Em Negociação */}
      <View className="flex-1 p-4 m-2 bg-white rounded shadow-md shadow-black">
        <Text className="text-gray-300 text-lg font-bold">Em Negociação</Text>
        <Text className="text-[#FFC107] text-xl font-bold">R$ 500,00</Text>
      </View>

      {/* Card Não Aprovado */}
      <View className="flex-1 p-4 m-2 bg-white rounded shadow-md shadow-black">
        <Text className="text-gray-300 text-lg font-bold">Não Aprovado</Text>
        <Text className="text-red-400 text-xl font-bold">R$ 0,00</Text>
      </View>
    </View>
</>

);
};