import { CardPeopleCare } from "@components/CardPeopleCare";
import { DescPageHeader } from "@components/DescPageHeader";
import { PageHeader } from "@components/PageHeader";
import SearchInput from "@components/SearchInput";
import { View } from "react-native";

export function PeopleCare() {

  return (
    <View className='flex-1 flex-col'>
      <PageHeader title='Pacientes' />
      <DescPageHeader title="Pessoas Sob Cuidados" />
      <View className="my-10">
        <View className="p-4">
          <SearchInput />
        </View>
        <View>
          <CardPeopleCare name="Lipe Lindo" age={50} url="https://github.com/luisfelipeprs.png" />
          <CardPeopleCare name="Franco Feio" age={24} url="https://github.com/feh-franc0.png" />
          <CardPeopleCare name="Sandra Aparecida" age={80} url="https://github.com/hiulesson.png" />
          <CardPeopleCare name="Neymar JR" age={33} url="https://github.com/adrileysrb.png" />
        </View>
      </View>
    </View>
  )
} 