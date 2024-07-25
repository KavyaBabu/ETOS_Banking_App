import {
  Onfido,
  OnfidoCaptureType,
  OnfidoCountryCode,
  OnfidoDocumentType,
} from '@onfido/react-native-sdk';

export const startSDK = () => {
    Onfido.start({
      sdkToken: "eyJhbGciOiJFUzUxMiJ9.eyJleHAiOjE3MjA1Mjc2OTAsInBheWxvYWQiOnsiYXBwIjoiZGE4NWJkOTktYmIzNi00NGFkLWE5M2UtNGZlMmI2MjIyZGE2IiwiY2xpZW50X3V1aWQiOiJhYTk0ZjE4MC0wY2FkLTQ2YjgtYTc4MS1jMzkzZTFkNTYzNTkiLCJpc19zYW5kYm94Ijp0cnVlLCJpc19zZWxmX3NlcnZpY2VfdHJpYWwiOnRydWUsImlzX3RyaWFsIjp0cnVlLCJzYXJkaW5lX3Nlc3Npb24iOiIwOWRkMjQyMS1lMjQyLTQwNzktODU0MC00MzQ0N2I1NGQ3YWEifSwidXVpZCI6InBsYXRmb3JtX3N0YXRpY19hcGlfdG9rZW5fdXVpZCIsInVybHMiOnsiZGV0ZWN0X2RvY3VtZW50X3VybCI6Imh0dHBzOi8vc2RrLm9uZmlkby5jb20iLCJzeW5jX3VybCI6Imh0dHBzOi8vc3luYy5vbmZpZG8uY29tIiwiaG9zdGVkX3Nka191cmwiOiJodHRwczovL2lkLm9uZmlkby5jb20iLCJhdXRoX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJvbmZpZG9fYXBpX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJ0ZWxlcGhvbnlfdXJsIjoiaHR0cHM6Ly9hcGkub25maWRvLmNvbSJ9fQ.MIGGAkEkt3VLEyKQ7Kl5VtcWA_z1vx8RQ0U0VfOoJ0ETwqj6pzR3SE-lHeOowxqQYZ4na83ndxhuSbVaF1pb9D31L54GDAJBQQOiwWIX_p18xsEBh0lK8hlvGYozpsYi_aqevOLowCUDDDS-FI9Yeg0CaZruJvE3AzESFEJ5073FikRuXlXvd8o",
      workflowRunId: "c810e21a-3fe7-4592-bd39-102c2e858926",
    })
      .then(res => console.warn('OnfidoSDK: Success:', JSON.stringify(res)))
      .catch(err => console.warn('OnfidoSDK: Error:', err.code, err.message));
  }