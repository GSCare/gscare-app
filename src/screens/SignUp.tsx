import { VStack, Text, Center, Heading, ScrollView } from 'native-base'

import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg="NavyBlue" px={10} pb={16}>
        <Center my={24}>
          <LogoSvg width={200} height={50}/>

          <Text color="gray.100" fontSize="sm">
            Cuide com segurança
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input 
            placeholder="Nome" 
          />

          <Input 
            placeholder="E-mal" 
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input 
            placeholder="Senha"
            secureTextEntry
          />

          <Button title="Criar e acessar" />
        </Center>

          <Button 
            title="Voltar para o login" 
            variant="outline" 
            mt={24}
          />
      </VStack>
    </ScrollView>
  )
}