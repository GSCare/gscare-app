import { useNavigation } from '@react-navigation/native'
import { VStack, Text, Center, Heading, ScrollView } from 'native-base'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10}>
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
            placeholder="E-mail" 
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input 
            placeholder="Senha"
            secureTextEntry
          />

          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button 
            title="Criar conta" 
            variant="outline" 
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}