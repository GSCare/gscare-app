import { DescPageHeader } from "@components/DescPageHeader";
import FilterFinancial from "@components/FilterFinancial";
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
      <FilterFinancial />
      <View className="flex-1">

      </View>
    </View>
  )
}