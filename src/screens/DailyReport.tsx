import { DescPageHeader } from "@components/DescPageHeader";
import { MaterialIcons } from '@expo/vector-icons';
import { PageHeader } from "@components/PageHeader";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { NextDayOfServiceAndPatient } from "@components/NextDayOfServiceAndPatient";
import Days from "@components/DayCard";
import PatientCardReport from "@components/CardPatientReport";

export function DailyReport() {
  const [reportSent, setReportSent] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const patients = [
    { patientName: 'Luis Felipe', appointmentTimeStart: '08:00', appointmentTimeEnd: '09:30', appointmentDate: '22 Março' },
    { patientName: 'Ta Rocheda', appointmentTimeStart: '09:00', appointmentTimeEnd: '10:30', appointmentDate: '15 Março' },
    { patientName: 'Neymar JR', appointmentTimeStart: '08:00', appointmentTimeEnd: '09:30', appointmentDate: '10 Março' },
    { patientName: 'KaKa', appointmentTimeStart: '09:00', appointmentTimeEnd: '10:30', appointmentDate: '7 Março' },
    { patientName: 'Mano Brown', appointmentTimeStart: '08:00', appointmentTimeEnd: '09:30', appointmentDate: '7 Março' },
    { patientName: 'John Doe', appointmentTimeStart: '09:00', appointmentTimeEnd: '10:30', appointmentDate: '3 Março' },
  ];
  return (
    <View className='flex-1 flex-col'>
      <PageHeader title='relatório diário' />
      <View className="p-12 rounded-lg items-center">
        <View className="justify-center items-center">
          <Days />
        </View>
      </View>
      <View className="mx-4">
        <Text className="font-bold text-xl pl-1 mb-4 text-gray-600">Pacientes do mês</Text>
        <ScrollView className="h-[480px] w-full" showsVerticalScrollIndicator={false}>
          {patients.map((patient, index) => (
            <PatientCardReport
              key={index}
              {...patient}
              isSelected={patient.patientName === selectedPatient}
              onSelect={() => setSelectedPatient(prevPatient => prevPatient === patient.patientName ? null : patient.patientName)}
            />
          ))}
        </ScrollView>
      </View>
    </View>

  )
}