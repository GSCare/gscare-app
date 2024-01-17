import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  value: string;
  placeholder: string;
}

export function Input({ value, placeholder,...props }:InputProps) {

  return (
    <TextInput 
      className="
        bg-gray-200
        w-full
        h-14
        p-4
        b-0
        rounded-md
        text-lg 
        text-gray-400 
        mb-4 
        focus:bg-white 
        focus:b-1 
        focus:border-orange-500"
      value={value}
      placeholder={placeholder}
      {...props}
    />
  )
}