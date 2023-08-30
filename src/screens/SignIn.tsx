import { VStack, Text, Center } from 'native-base'

import LogoSvg from '@assets/logoT.svg'

export function SignIn() {
  return (
    <VStack flex={1} bg="blue.400">
      <Center my={24}>
        <LogoSvg width={200} height={50}/>

        <Text color="gray.100" fontSize="sm">
          Cuide com segurança
        </Text>
      </Center>

    </VStack>
  )
}