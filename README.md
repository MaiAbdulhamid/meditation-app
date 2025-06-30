# 🧘‍♀️ Meditation App – Built with React Native & Expo

A beautiful and simple meditation app to help users relax, meditate, and build mindful habits.  
The app includes nature sounds, affirmations, and custom meditation sessions.

---

## ✨ Features

- 🌿 Nature-based meditation sessions
- 🧠 Positive affirmations for focus & calm
- 🕒 Adjustable meditation duration
- 🧩 Modular architecture with Expo Router
- 🎧 Audio integration (expected via expo-audio)

---

## 📁 Folder Structure (Overview)

```
app/
├── (modal)/adjust-duration.tsx     # Modal screen to choose meditation length
├── (tabs)/                         # Bottom tab screens
│   ├── affirmations.tsx
│   ├── nature-meditate.tsx
│   └── meditate.tsx
├── _layout.tsx                     # Root layout for app
├── index.tsx                       # Main home entry point

assets/                             # Sounds, fonts, images
components/                         # Reusable UI components
constants/                          # Colors, sizes, configs
context/                            # Global context
hooks/                              # Custom hooks
types/                              # Type definitions
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YourUsername/meditation-app.git
cd meditation-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npx expo start
```

Then scan the QR code using Expo Go app on your phone.

---

## 🧠 Built With

| Tool         | Purpose                          |
| ------------ | -------------------------------- |
| React Native | UI development                   |
| Expo Router  | Navigation and screen management |
| TypeScript   | Type-safe development            |
| Context API  | Global state management          |
| NativeWind   | TailwindCSS for React Native     |

---

## 📸 Screenshots or Demo

[Demo](https://youtube.com/shorts/asHhw3ts4k4?feature=share).

---

## 👩‍💻 Author

**Mai Abdulhamid**  
Frontend Developer (React / React Native)  
GitHub: [@MaiAbdulhamid](https://github.com/MaiAbdulhamid)

---

## 📄 License

This project is licensed under the MIT License.
