import { Text, View } from "react-native"
import { ButtonPeopleCare } from "./ButtonPeopleCare"
import { UserPhoto } from "./UserPhoto"

interface IProps{
  name: string;
  age: number;
  url:string
}

export function CardPeopleCare({name, age, url}:IProps) {
  // https://github.com/luisfelipeprs.png

  return (
    <View className="flex-row justify-between m-4">
      <View className="flex-row gap-4">
        <View className="w-14 h-14">
          <UserPhoto sourceUrl={url} altDescription="paciente photo" />
        </View>
        <View className="flex-col">
          <Text className="font-bold text-base">{name}</Text>
          <Text className="font-bold text-base">{age} anos</Text>
        </View>
      </View>
      <ButtonPeopleCare />
    </View>
  );
}