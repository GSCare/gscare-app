import React from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  value: string;
  placeholder: string;
}

export function Input({ value, placeholder, ...props }: InputProps) {
  return (
    <View style={{ position: "relative" }}>
      <TextInput
        style={{
          backgroundColor: "#E5E7EB",
          width: "100%",
          height: "100%",
          padding: 16,
          borderWidth: 0,
          borderRadius: 8,
          fontSize: 16,
          color: "#718096",
        }}
        placeholder={placeholder}
        textAlignVertical="top" // Esta linha faz o placeholder ficar no topo
        {...props}
      />
    </View>
  );
}
