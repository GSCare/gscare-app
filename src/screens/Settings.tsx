import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Center, ScrollView, Text, VStack, Skeleton, Heading, Box, HStack } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from '@components/Input'
import { Button } from "@components/Button";

const PHOTO_SIZE = 33;

export function Settings() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <VStack bg="blue.500" pt={16} pb={5} alignItems="center">
        <Heading color="gray.100" fontSize="lg">
          Perfil
        </Heading>
      </VStack>
      <ScrollView>
        <Center mt={6} px={10}>
          {
            photoIsLoading
            ?
            <Skeleton 
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.100"
              endColor="blue.100"
            />
            :
            <UserPhoto
              size={PHOTO_SIZE} 
              source={{ uri: 'https://github.com/feh-franc0.png' }}
              alt="Imagem do usuário ou empresa"
            />
          }
        
          <TouchableOpacity>
            <Text color='orange.400' fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input 
            bg="blue.100"
            placeholder="Nome"
          />

          <Input 
            bg="blue.100"
            placeholder="conta@email.com"
            isDisabled
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="orange.300" fontSize="md" mb={2}>
            Alterar senha
          </Heading>
        
          <Input
            bg="blue.100"
            placeholder="Senha antiga"
            secureTextEntry
          />
        
          <Input
            bg="blue.100"
            placeholder="Nova senha"
            secureTextEntry
          />
        
          <Input
            bg="blue.100"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button 
            title="Atualizar"
            mt={4}
          />
        </VStack>
      </ScrollView>
    </VStack>
  )
}