import { Text, View } from "react-native"

interface IProps {
  month: string
}

export function MonthFinancial({ month }: IProps) {
  return (
    <View className="mb-4">
      <Text className="text-lg font-bold">{month}</Text>
    </View>
  )
}