import { VStack, Text, Center, Heading, ScrollView, Image } from 'native-base'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/backgroundLogin/background.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export function SignUp() {
  const navigation = useNavigation()

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10}>
        
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando" 
          resizeMode="cover"
          h={'100%'}
          position="absolute"
          blurRadius={12}
        />

        <Center my={20}>
          <LogoSvg width={200} height={50}/>

          {/* <Text color="white" fontSize="md" fontWeight="medium">
            Cuide com segurança
          </Text> */}
        </Center>

        <Center>
          <Heading color="white" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input 
            placeholder="Nome" 
          />

          <Input 
            placeholder="E-mail" 
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input 
            placeholder="Senha"
            secureTextEntry
          />

          <Input 
            placeholder="Confirmar senha"
            secureTextEntry
          />

          <Button title="Criar e acessar" />
        </Center>

          <Button 
            title="Voltar para o login" 
            variant="outline" 
            mt={24}
            onPress={handleGoBack}
          />
      </VStack>
    </ScrollView>
  )
}