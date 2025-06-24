# Currency Converter App

_(Add screenshots or a GIF of your app here!)_

## 📚 Project Overview

This is a modern mobile currency converter application built with React Native. It allows users to view live exchange rates, select a preferred base currency, manage a list of favorite currencies, and perform quick conversions. The app is designed with a focus on a smooth user experience, offline capabilities, and clear data presentation.

## ✨ Features

- **Live Exchange Rates:** Display up-to-date currency exchange rates.

- **Customizable Base Currency:** Users can select their preferred base currency (e.g., USD, EUR, GBP) to see rates relative to it.

- **Rate Change Indicator:** Visual feedback on how much a currency rate has changed since the last fetch, including the time elapsed.

- **Data Freshness Indicator:** A dynamic top bar indicating the real-time status of the fetched data (fresh, updating, stale, or offline).

- **Favorites Management:** Users can easily add and remove currencies from a personalized favorites list for quick access.

- **Offline Support:** Previously viewed rates and user preferences are cached and accessible even without an internet connection.

- **Currency Calculator:** Perform quick conversions between currencies based on the latest available rates.

- **Clean & Intuitive UI:** A strict, professional, and accessible color scheme designed for financial data.

## 🏛️ Project Architecture

This application follows a modern, modular architecture, leveraging industry-standard libraries to separate concerns and ensure maintainability and scalability.

- **React Native:** The core framework for cross-platform mobile development.

- **React Navigation:** Handles all in-app navigation, including tab-based navigation.

- **TanStack Query (React Query):** Manages server-side state (fetching, caching, synchronizing, and updating currency rates). It intelligently handles data freshness, background refetching, and error states.

- **Zustand:** A lightweight and flexible state management solution for client-side state (e.g., user's selected base currency, favorite currencies).

- **MMKV:** A high-performance, synchronous key-value storage solution used for persisting both React Query's cache and Zustand's state.

The architecture emphasizes:

- **Separation of Concerns:** Clear boundaries between UI components, data fetching/caching logic, and application-specific state.

- **Data Freshness:** Prioritizing displaying fresh data while providing robust offline capabilities.

- **Performance:** Utilizing efficient caching and state management solutions for a smooth user experience.

## 📦 Library Choices

Here's a breakdown of the key libraries used and the rationale behind their selection:

- **`@tanstack/react-query` (with `@tanstack/query-sync-storage-persister`):**

  - **Purpose:** Server-state management (fetching, caching, invalidating, and updating asynchronous data).

  - **Rationale:** React Query simplifies complex data fetching patterns, provides automatic caching, background re-fetching, and robust error handling. The persistence adapter allows the query cache to be saved to and rehydrated from MMKV, enabling offline functionality.

- **`zustand` (with `zustand/middleware` for `persist`):**

  - **Purpose:** Client-side state management.

  - **Rationale:** Zustand is lightweight, performant, and has a simple API, making it ideal for managing global application state like user preferences and favorites without excessive boilerplate. Its `persist` middleware seamlessly integrates with MMKV for persistent client state.

- **`react-native-mmkv`:**

  - **Purpose:** High-performance, synchronous key-value storage.

  - **Rationale:** MMKV offers significantly faster read/write operations compared to `AsyncStorage`, crucial for a fluid user experience, especially when hydrating large caches on app startup or frequent state updates.

- **`@react-navigation/native` & `stack` / `bottom-tabs`:**

  - **Purpose:** Navigation across different screens and tabs.

  - **Rationale:** The standard and most feature-rich navigation solution for React Native, providing a customizable and performant navigation experience.

## 💡 How Everything Works

This section details the core logic and interactions within the app.

### Data Flow & Fetching

The app fetches live currency exchange rates from the [Fixer.io API](https://fixer.io/) using React Query.

1. **Initial Load / Stale Data:** When the app starts, or when data is considered "stale" (older than 5 minutes based on `staleTime`), React Query attempts to fetch fresh data.

2. **Background Polling:** Rates are automatically refreshed every 5 minutes (`refetchInterval`) while the app is in the foreground, ensuring data is kept up-to-date.

3. **Persistence:** All fetched currency rate data is automatically cached and persisted using `react-native-mmkv` via TanStack Query's persistence layer. This enables immediate data display on subsequent app launches and offline access.

4. **Error Handling:** React Query handles network failures and API errors gracefully, providing retry mechanisms and exposing `isError` and `error` states for UI feedback.

### Rate Calculation (EUR Base & Cross-Rates)

Due to limitations of the free Fixer.io API tier, all raw exchange rates are provided with **Euro (EUR) as the base currency**.

- **Client-Side Derivation:** When the user selects a custom base currency (e.g., USD), the app performs client-side calculations to derive all other rates relative to the chosen base.

  - **Formula:** `Rate(UserBase / Target) = (1 / Rate(EUR / UserBase)) * Rate(EUR / Target)`

  - **Nuance:** While highly accurate, these derived rates may have minor differences compared to direct market rates due to real-world bid/ask spreads and data aggregation nuances. This is an acceptable compromise for the educational and demonstrative purpose of this project.

### Rate Change Calculation

To provide a dynamic indicator of rate changes, the app compares the newly fetched (or current cached) rates with the _immediately preceding_ set of rates that were successfully displayed for the _same selected base currency_.

- This "previous" rate data is managed in a dedicated Zustand store and updated after each successful data acquisition cycle, creating a short-term historical context for comparison.

- The time `Y` is dynamically calculated based on the difference between the current time and the `fetchedAtLocalTime` timestamp stored with the current rate data.

### Data Freshness Indicator

A custom header component dynamically displays the status of the currency data:

- **Fresh (Green):** Data fetched less than 5 minutes ago.

- **Updating (Teal/Blue):** A network request is actively in progress.

- **Stale (Yellow):** Data is older than 5 minutes but no current fetch is active.

- **Failed (Red):** The last data fetch attempt resulted in an error.

- **Initializing (Gray):** No data has been loaded yet.

This indicator leverages React Query's `isFetching`, `isError`, and custom time-based logic. It also allows for manual refetching by tapping on the refresh button.

### Offline Support

The combination of `react-native-mmkv` and TanStack Query's persistence, along with Zustand's persisted state, provides robust offline capabilities:

- **Cached Rates:** The entire currency rate cache is saved locally, allowing users to browse rates even without an internet connection.

- **User Preferences:** The selected base currency and favorite currencies are also persisted, ensuring a consistent experience across sessions, online or offline.

- **Reconnection Handling:** React Query automatically attempts to re-fetch stale data when network connectivity is restored.

### Base Currency Selection & Favorites

- **Base Currency:** Managed by a Zustand store and persisted locally. Changing the base currency triggers a re-calculation of all displayed rates.

- **Favorites:** A list of currency identifiers stored in Zustand and persisted. The main rate list is filtered based on this list, offering quick access to preferred currencies.

### Currency Calculator

The in-app calculator provides instant conversions based on the currently displayed exchange rates. It leverages the latest `latest` object (processed by the `useRates` hook) to ensure accurate calculations.

## Additional features

### Searching

The list from Fixer API is big (around 170 currencies) and it is hard to find something manually. So I added a search field where user can enter the code of currency and the results will be filtered.

### Pull to refresh

Simple but very nice feature that allows user to refresh main list

### Disclaimer on startup

Very nice slider-based tour on what the app is and how the user should and should not use it

## 🚀 Setup Instructions

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (LTS version recommended)

- npm or Yarn

- React Native CLI or Expo

- Android Studio (for Android development)

- Xcode (for iOS development)

- An active internet connection to fetch initial currency data.

- A free API Key from [Fixer.io](https://fixer.io/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ODMyk/octi-test-app.git
   cd currency-converter-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Environment Variables:**

   - Create a `.env` file in the root of your project:

     ```
     API_KEY=YOUR_FIXER_IO_API_KEY
     ```

   - Replace `YOUR_FIXER_IO_API_KEY` with your actual API key obtained from [Fixer.io](https://fixer.io/).

4. **Install iOS Pods (if targeting iOS):**

   ```bash
   cd ios
   pod install
   cd ..
   ```

### Running the App

#### Development Build

To run the app in development mode:

- **For Android:**

  ```bash
  npm run android
  ```

- **For iOS:**

  ```bash
  npm run ios
  ```

#### Release Build (Android Example)

To build a release APK for Android:

1. **Clean previous builds:**

   ```bash
   cd android
   ./gradlew clean
   cd ..
   ```

2. **Assemble release build:**

   ```bash
   cd android
   ./gradlew assembleRelease
   cd ..
   ```

   The `.apk` file will be located at `android/app/build/outputs/apk/release/app-release.apk`. You can install it on your device using `adb install path/to/app-release.apk`.
