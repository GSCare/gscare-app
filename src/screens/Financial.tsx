import { DescPageHeader } from "@components/DescPageHeader";
import FilterFinancialData from "@components/FilterFinancialData";
import FilterFinancialType from "@components/FilterFinancialType";
import { FinancialCards } from "@components/FinancialCards";
import { PageHeader } from "@components/PageHeader";
import { useState } from "react";
import { View } from "react-native";

export function Financial() {

  return (

    <View className="flex-1 flex-col">
      <PageHeader title='Financeiro' />
      <DescPageHeader title="Financial Care" />
      <FinancialCards />
      <View className="flex-row">
          <FilterFinancialData />
          <FilterFinancialType />
      </View>
    </View>

  )
}