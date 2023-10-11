import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput 
      bg="gray.50"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="gray.400"
      fontFamily="body"
      mb={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: "white",
        borderWidth: 1,
        borderColor: "Orange",
      }}
      {...rest}
    />
  )
}