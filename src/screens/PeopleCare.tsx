import { CardPeopleCare } from "@components/CardPeopleCare";
import { PageHeader } from "@components/PageHeader";
import SearchInput from "@components/SearchInput";
import { ScrollView, TouchableOpacity, View } from "react-native";

export function PeopleCare() {

  return (
    <View className='flex-col flex-1'>
        <View className="m-4 mt-10">
          <SearchInput />
        </View>
        <ScrollView showsVerticalScrollIndicator={true} className="h-[90%]">
          <View className="mb-10">
            <View className="m-3">
              <CardPeopleCare
                url="https://github.com/luisfelipeprs.png"
                name="Luís Felipe"
                specialty="Programador"
                experience="10 anos de experiência"
                rating={5}
              />
            </View>
            <View className="m-3">
              <CardPeopleCare
                name="Fernando Franco"
                specialty="Freelancer"
                experience="5 anos de experiência"
                rating={4}
              />
            </View>
            <View className="m-3">
              <CardPeopleCare
                name="Sandra Aparecida"
                specialty="Cuidadora"
                experience="8 anos de experiência"
                rating={3}
              />
            </View>
            <View className="m-3">
              <CardPeopleCare
                name="Receba da Silva"
                specialty="Jogador"
                experience="2 anos de experiência"
                rating={1}
              />
            </View>
            <View className="m-3">
              <CardPeopleCare
                name="Calabreso Oliveiro"
                specialty="Pegadinhas"
                experience="22 anos de experiência"
                rating={5}
              />
            </View>
            <View className="m-3">
              <CardPeopleCare
                name="Sandra Aparecida"
                specialty="Cuidadora"
                experience="8 anos de experiência"
                rating={3}
              />
            </View>
            <View className="m-3">
              <CardPeopleCare
                name="Sandra Aparecidas"
                specialty="Cuidadora"
                experience="8 anos de experiência"
                rating={3}
              />
            </View>
            <View className="m-3">
              <CardPeopleCare
                name="Sandra Aparecidass"
                specialty="Cuidadora"
                experience="8 anos de experiência"
                rating={3}
              />
            </View>
          </View>
        </ScrollView>
      </View>
  )
} 