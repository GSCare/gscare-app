import { VStack, Image } from 'native-base'

import backgroundB from '@assets/imgfundo.png'

export function SignIn() {
  return (
    <VStack flex={1} bg="blue.400">
      <Image 
        flex={1}
        source={backgroundB}
        alt="Pessoa treinando"
        // resizeMode="contain"
        // position="absolute"
      />

    </VStack>
  )
}