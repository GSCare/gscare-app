import { VStack, Text, Center, Heading } from 'native-base'

import LogoSvg from '@assets/logoT.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignIn() {
  return (
    <VStack flex={1} bg="blue.400" px={10}>

      <Center my={24}>
        <LogoSvg width={200} height={50}/>

        <Text color="gray.100" fontSize="sm">
          Cuide com segurança
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Acesse sua conta
        </Heading>

        <Input 
          placeholder="E-mal" 
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input 
          placeholder="Senha"
          secureTextEntry
        />

        <Button title="Acessar" />

      </Center>

    </VStack>
  )
}