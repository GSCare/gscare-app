import { DescPageHeader } from "@components/DescPageHeader";
import FilterFinancialData from "@components/FilterFinancialData";
import FilterFinancialType from "@components/FilterFinancialType";
import { FinancialCards } from "@components/FinancialCards";
import { PageHeader } from "@components/PageHeader";
import TransactionCard from "@components/TransactionCard";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export function Financial() {

  return (

    <View className="flex-1 flex-col">

      <FinancialCards />
      <View className="flex-row">
        <FilterFinancialData />
        <FilterFinancialType />
      </View>
      <ScrollView>
        <TransactionCard
          month="Fevereiro"
          date="Sábado, 07 fev 2024"
          balance='829,35'
          type="Pix enviado"
          value={'730,00'}
          name="João Franco Fernando da Silva"
          category="Alimentação"
        />
      </ScrollView>
    </View>

  )
}