# Go Driking

Aplicativo mobile de lembrete de hidratação desenvolvido com React Native, Expo e TypeScript.

O objetivo do aplicativo é ajudar usuários a manterem uma rotina saudável de consumo de água através de lembretes inteligentes, acompanhamento diário e controle de metas.

---

# Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Zustand
- Expo Notifications
- AsyncStorage
- React Native Reanimated
- Expo Linear Gradient

Todas as tecnologias utilizadas são gratuitas e open-source.

---

# Funcionalidades

- Meta diária de hidratação
- Controle de consumo de água
- Notificações locais offline
- Escolha de horário dos lembretes
- Histórico de hidratação
- Interface premium mobile
- Tema escuro em tons de roxo
- Navegação fluida
- Animações suaves

---

# Importante

Ao abrir o aplicativo pela primeira vez:

1. Entre na tela de configurações.
2. Desative as notificações.
3. Ative novamente as notificações.

Esse processo é necessário para que o Android registre corretamente os lembretes locais no dispositivo.

Após isso, as notificações funcionarão normalmente mesmo com o aplicativo fechado.

---

# Instalação

Clone o projeto:

```bash
git clone https://github.com/seuusuario/go-driking.git
```

Entre na pasta:

```bash
cd go-driking
```

Instale as dependências:

```bash
npm install
```

---

# Rodando o projeto

Inicie o Expo:

```bash
npx expo start
```

---

# Build Android APK

Para gerar APK preview:

```bash
npx eas-cli build -p android --profile preview
```

---

# Estrutura do projeto

```bash
src/
├── components/
├── navigation/
├── screens/
├── services/
├── storage/
├── store/
├── theme/
└── utils/
```

---

# Notificações

O aplicativo utiliza:

- Expo Notifications
- notificações locais
- funcionamento offline
- sem Firebase
- sem servidor
- sem APIs pagas

---

# Compatibilidade

- Android
- iOS

---

# Design

O aplicativo foi desenvolvido com foco em:

- experiência mobile
- minimalismo
- performance
- fluidez
- aparência premium

---

# Licença

Projeto open-source para fins educacionais e pessoais.
