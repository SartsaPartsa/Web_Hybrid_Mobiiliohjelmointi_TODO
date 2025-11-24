# 📱 React Native — Todo List

**Tekijä:** Sara Vehviläinen  
**Oppilaitos:** Oulun ammattikorkeakoulu  
**Kurssi:** Web- ja hybriditeknologiat mobiiliohjelmoinnissa (IN00CT08-3006)  
**Lukukausi:** Syksy 2025

---

## 🧩 Tehtävän kuvaus

Tämä sovellus on yksinkertainen tehtävälista (Todo List), jossa käyttäjä voi lisätä, merkitä tehdyiksi ja tallentaa tehtäviä pysyvästi laitteen muistiin.  
Tehtävä on osa kurssia **Web- ja hybriditeknologiat mobiiliohjelmoinnissa (IN00CT08-3006)**.

---

## ✨ Toiminnallisuus

- Käyttäjä voi lisätä uusia tehtäviä tekstikentän kautta
- Tehtävän voi merkitä tehdyksi/tekemättömäksi koskettamalla sitä
- Tehdyt tehtävät näytetään yliviivattuina ja harmaalla värillä
- Tehtävät tallennetaan automaattisesti laitteen muistiin (AsyncStorage)
- Tehtävät ladataan automaattisesti sovelluksen käynnistyessä
- Näppäimistö pysyy hallittavana listan käytön aikana

---

## 🛠️ Käytetyt teknologiat ja komponentit

### Teknologiat
- **React Native** (Expo)
- **TypeScript**
- **AsyncStorage** - Pysyvä tiedon tallennus

### React Hooks
- `useState` - Tilanhalinta
- `useEffect` - Sivuvaikutusten hallinta (lataus/tallennus)

### React Native Komponentit
- `SafeAreaView` - Turvallinen näyttöalue
- `View` - Layout-kontti
- `Text` - Tekstin näyttö
- `TextInput` - Tekstinsyöttö
- `TouchableOpacity` - Kosketettava painike
- `FlatList` - Tehokas lista
- `StyleSheet` - Tyylien määrittely

---

## 🚀 Käyttöönotto

### Olemassa olevan projektin käynnistys:

```bash
# Asenna riippuvuudet
npm install

# Käynnistä kehityspalvelin
npx expo start
```

### Sovelluksen testaaminen:

**📱 Mobiililaite:**
- Asenna **Expo Go** -sovellus (iOS App Store / Google Play)
- Skannaa QR-koodi Expo Go -sovelluksella

**💻 Emulaattori/Simulaattori:**
```bash
npm run android   # Android-emulaattori
npm run ios       # iOS-simulaattori  
npm run web       # Verkkoselain
```

---

## 📁 Projektikansio

```
Web_Hybrid_Mobiiliohjelmointi_TODO/
├── README.md
└── Tehtava4/
    └── Todo/
        ├── App.tsx              # Sovelluksen pääkomponentti
        ├── app.json             # Expo-konfiguraatio  
        ├── index.ts             # Sovelluksen käynnistyspiste
        ├── types.ts             # TypeScript-tyyppimäärittelyt
        ├── package.json         # Projektin riippuvuudet
        ├── tsconfig.json        # TypeScript-asetukset
        ├── assets/              # Kuvat ja resurssit
        └── components/          # Komponentit
            ├── TaskInput.tsx    # Tehtävän syöttökenttä
            └── TaskItem.tsx     # Yksittäinen tehtävä
```

---

## 🎯 Oppimistavoitteet

- React Native -perusteet
- React Hooks (`useState`, `useEffect`)
- Pysyvä tiedon tallennus (`AsyncStorage`)
- Listakomponenttien käyttö (`FlatList`)
- Komponenttien modularisointi
- TypeScript React Native -sovelluksessa
- Käyttäjäsyötteen käsittely ja validointi

---

## 📝 Huomioita

- Sovellus tallentaa tehtävät automaattisesti `AsyncStorage`-kirjastolla
- Tyhjää tehtävää ei voi lisätä (`.trim()`-validointi)
- Tehdyt tehtävät näytetään yliviivattuina
- `keyboardShouldPersistTaps="handled"` mahdollistaa listan käytön näppäimistön ollessa auki
- `SafeAreaView` varmistaa, että sisältö ei mene esim. iPhone-loven alle

---

## 📚 Oppimisresurssit

### React Native dokumentaatio:
- [React Native Documentation](https://reactnative.dev/docs/getting-started) - Virallinen dokumentaatio
- [React Native FlatList](https://reactnative.dev/docs/flatlist) - Listan renderöinti
- [React Native TextInput](https://reactnative.dev/docs/textinput) - Tekstisyötteen käsittely
- [React Native TouchableOpacity](https://reactnative.dev/docs/touchableopacity) - Kosketettavat elementit
- [React Native SafeAreaView](https://reactnative.dev/docs/safeareaview) - Turvallinen näyttöalue

### React Hooks:
- [React useState Hook](https://react.dev/reference/react/useState) - Tilanhallinnan perusteet
- [React useEffect Hook](https://react.dev/reference/react/useEffect) - Sivuvaikutukset
- [React Hooks Documentation](https://react.dev/reference/react) - Kaikki React Hooks

### Expo dokumentaatio:
- [Expo Documentation](https://docs.expo.dev/) - Expo-alustan dokumentaatio
- [Expo CLI](https://docs.expo.dev/more/expo-cli/) - Komentorivityökalut
- [Expo Go App](https://expo.dev/client) - Sovelluksen testaus mobiililaitteella

### AsyncStorage:
- [AsyncStorage Documentation](https://react-native-async-storage.github.io/async-storage/) - Pysyvän tiedon tallennus
- [AsyncStorage Usage](https://react-native-async-storage.github.io/async-storage/docs/usage) - Käyttöohjeet

### TypeScript:
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript-dokumentaatio
- [TypeScript with React Native](https://reactnative.dev/docs/typescript) - TypeScript React Native -sovelluksissa

### Työkalut ja ympäristöt:
- [VS Code React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) - Kehitystyökalut
- [Android Studio](https://developer.android.com/studio) - Android-emulaattori
- [Xcode](https://developer.apple.com/xcode/) - iOS-simulaattori

---

## About

Web- ja hybriditeknologiat mobiiliohjelmoinnissa -kurssin viikkotehtävä 4 - Sara Vehviläinen
