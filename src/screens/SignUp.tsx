
import { useNavigation } from '@react-navigation/native'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/backgroundLogin/background.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { ImageBackground, ScrollView, Text, View } from 'react-native'

export function SignUp() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View className='flex-1 px-0 content-around flex-col h-screen'>

        <ImageBackground
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          blurRadius={12}
          className='h-full w-full absolute bg-cover justify-center'
        />

        <View className='mt-20 mb-10 mx-auto'>
          <LogoSvg width={200} height={50} />
        </View>

        <View className='mt-6 px-9'>
          <Text className='text-white text-2xl mb-6 font-bold mx-auto'>
            Crie sua conta
          </Text>

          <Input
          value=''
            placeholder="Nome"
          />

          <Input
          value=''
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
          value=''
            placeholder="Senha"
            secureTextEntry
          />

          <Input
          value=''
            placeholder="Confirmar senha"
            secureTextEntry
          />

          <Button title="Criar e acessar" />
        </View>

        <View className='mt-20 px-9'>
        <Button
          title="Voltar para o login"
          variant="outline"
        />
        </View>
      </View>
    </ScrollView>
  )
}