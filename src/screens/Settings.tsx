import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { HomeHeader } from "@components/HomeHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from '@components/Input'
import { Button } from "@components/Button";
import { PageHeader } from "@components/PageHeader";

const PHOTO_SIZE = 33;

export function Settings() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <View className="flex-1 flex-col">
      <PageHeader title='Perfil' />
      <ScrollView>

        <View className="mt-6 px-10 justify-center items-center">

          <View className="h-20 w-20">
            <UserPhoto
              sourceUrl={'https://github.com/luisfelipeprs.png'}
              altDescription="Imagem do usuário ou empresa"
            />
          </View>
          <TouchableOpacity>
            <Text className="text-orange-400 font-bold text-lg mt-2 mb-8">
              Alterar foto
            </Text>
          </TouchableOpacity>
        </View>
        <View className="px-10 mb-9 flex-col">
          <View className="w-50 h-20 py-3">
            <Input
              value=""
              placeholder="Nome"
            />
          </View>
          <View className="w-50 h-20 py-3">
            <Input
              value=""
              placeholder="conta@email.com"
            // isDisabled
            />
          </View>
        </View>
        <View className="px-10 mb-9 flex-col">
          <Text className='text-orange-300 text-lg mb-2'>
            Alterar senha
          </Text>
          <View className="w-50 h-20 py-3">
            <Input
              value=""
              placeholder="Senha antiga"
              secureTextEntry
            />
          </View>
          <View className="w-50 h-20 py-3">
            <Input
              value=""
              placeholder="Nova senha"
              secureTextEntry
            />
          </View>
          <View className="w-50 h-20 py-3">
            <Input
              value=""
              placeholder="Confirme a nova senha"
              secureTextEntry
            />
          </View>
          <Button
            title="Atualizar"
          />
        </View>
      </ScrollView>
    </View>
  )
}