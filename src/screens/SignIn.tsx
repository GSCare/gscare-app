import { useNavigation } from '@react-navigation/native'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/backgroundLogin/background.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUp')
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

        <View className='mt-24 mb-24 mx-auto'>
          <LogoSvg width={200} height={50} />
        </View>
        <View className='mt-6 px-9'>
          <Text className='text-white text-2xl mb-6 font-bold mx-auto'>
            Acesse sua conta
          </Text>
          <View className="w-50 h-20 py-3">

            <Input
              placeholder='Email'
              value=''
            />
          </View>
          <View className="w-50 h-20 py-3">

            <Input
              placeholder='Senha'
              value=''
            />
          </View>

          <Button title="Acessar" />
        </View>

        <View className='mt-32 px-9'>
          <Button
            title="Crie sua conta!"
            variant="outline"
          />
          <TouchableOpacity
            onPress={handleNewAccount}>
            <Text>Teste</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}