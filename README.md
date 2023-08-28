## WARN WARN: In React 18, SSRProvider is not necessary and is a noop.

### Solução:

 - Abra o arquivo node_modules/native-base/src/core/NativeBaseProvider.tsx
 - Na linha 97 altere <SSRProvider>{children}</SSRProvider> para:
 
```javascript
{
  React.version >= '18' ? children : <SSRProvider>{children}</SSRProvider>;
}
```

 - modificar a versao do native-base para: "native-base": "^3.3.0",