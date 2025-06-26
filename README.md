# Firebase and Context

Este é um projeto didático desenvolvido em **React Native com Expo**, utilizando **Firebase versão 9.22.0** para autenticação e gerenciamento de uma coleção de livros.

## 🚀 Tecnologias utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Firebase 9.22.0](https://firebase.google.com/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Instalação

### 1. Clone o projeto

```bash
git clone https://github.com/nicolasjveiga/dpm-firebase-context.git
cd dpm-firebase-context
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Instale a versão exata do Firebase

```bash
yarn add firebase@9.22.0
```

### 4. Instale as dependências do React Navigation

```bash
npx expo install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
yarn add @react-navigation/native-stack
```

---

## ▶️ Rodando o projeto

### Inicie o servidor de desenvolvimento Expo:

```bash
npx expo start
```

Você pode escanear o QR code no seu dispositivo ou usar um emulador Android/iOS para testar o app.

---

## 🔐 Firebase

Este projeto depende de um projeto ativo no Firebase com os seguintes serviços ativados:

- 🔐 Authentication (Login com e-mail/senha)
- 🔥 Firestore Database

### Configuração

Adicione as suas credenciais Firebase no arquivo:

```
/firebase/config/firebaseConfig.ts
```

Exemplo:

```ts
export const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "0000000000",
  appId: "1:0000000000:web:abc123"
};
```

---

## ✨ Funcionalidades

- Cadastro e login de usuários
- Listagem de livros com estilização elegante
- Cadastro e edição de livros com formulário reutilizável
- Logout com redirecionamento automático
- Hooks personalizados para abstrair o Firebase

---

## 📁 Estrutura básica

```
├── firebase/
│   ├── config/
│   └── hooks/
├── screens/
│   ├── RegisterScreen.tsx
│   ├── LoginScreen.tsx
│   ├── BookListScreen.tsx
│   └── BookEditScreen.tsx
├── components/
│   └── BookForm.tsx
├── types/
│   └── Book.ts
└── App.tsx
```

---

## 📌 Observações

- Este projeto é baseado nos hooks personalizados do repositório:  
  [`simple-firestore-hooks`](https://github.com/andresjesse/simple-firestore-hooks)
- Ideal para projetos acadêmicos e experimentação com Firebase.

---