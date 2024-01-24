## Screenshots

### Login
<!-- ![Tela de login](./@Screenshots/SignIn2.jpg) -->
<img src="./@Screenshots/SignIn.jpg" alt="Tela de criação de conta" width="30%">

### Register
<!-- ![Tela de criação de conta](./@Screenshots/SignUp2.jpg) -->
<img src="./@Screenshots/SignUp.jpg" alt="Tela de criação de conta" width="30%">

---
## WARN WARN: In React 18, SSRProvider is not necessary and is a noop.

### Solução:

 - Abra o arquivo node_modules/native-base/src/core/NativeBaseProvider.tsx
 - Na linha 97 altere <SSRProvider>{children}</SSRProvider> para:
 
```javascript
{
  React.version >= '18' ? children : <SSRProvider>{children}</SSRProvider>;
}
```

 - caso continue o erro: Modificar a versao do native-base para: "native-base": "^3.3.0",




 **Componentes que faltam para tirar o Native-Base:**

- [✅] `src/screens/SupplyMonitoring.tsx`
- [✅] `src/screens/Settings.tsx`
- [✅] `src/screens/Profile.tsx`
- [✅] `src/screens/PatientsMedicalDocuments.tsx`
- [✅] `src/screens/PatientCalendar.tsx`
- [✅] `src/screens/MedicationSchedules.tsx`
- [✅] `src/screens/Home.tsx`
- [✅] `src/screens/FoodAndMedicineAllergies.tsx`
- [✅] `src/screens/EmergencyPhones.tsx`
- [✅] `src/screens/ConsultationCalendar.tsx`
- [✅] `src/screens/ComplaintsAndNotices.tsx`
- [✅] `src/screens/ClientsPathologies.tsx`
- [✅] `src/screens/AttendanceCalendar.tsx`
- [✅] `src/routes/Routes.tsx`
- [🚧] `src/routes/AppRoutes.tsx`
- [🚧] `src/components/Loading.tsx`
- [✅] `src/theme/index.ts`
- [🚧] `./App.tsx`

Legenda:
- 🚧: Incompleto
- ✅: Completo