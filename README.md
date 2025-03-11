# Weather App

This is a weather application built using React, Redux, and Tailwind CSS. The app allows users to search for weather information by city and displays the current weather conditions as well as a forecast for the next few days.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/kolibriof/Weather-App.git
   cd Weather-App
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## Usage Instructions

1. Open the application in your browser:
   ```sh
   http://localhost:3000
   ```

2. Enter the name of a city in the search bar and press Enter.

3. The app will display the current weather conditions and a forecast for the next few days.

## Contribution Guidelines

1. Fork the repository.

2. Create a new branch for your feature or bugfix:
   ```sh
   git checkout -b my-feature-branch
   ```

3. Make your changes and commit them:
   ```sh
   git commit -m "Add new feature"
   ```

4. Push your changes to your forked repository:
   ```sh
   git push origin my-feature-branch
   ```

5. Create a pull request to the main repository.

## Code Structure and Key Components

- `src/index.tsx`: Entry point of the application. Sets up the Redux store and renders the `App` component.
- `src/App.tsx`: Main component of the application. Contains the `SearchBar` and `Forecast` components.
- `src/components/SearchBar.tsx`: Component for the search bar where users can enter the name of a city.
- `src/components/Forecast.tsx`: Component for displaying the current weather conditions and forecast.
- `src/components/forecast_components/ForecastNextDays.tsx`: Component for displaying the weather forecast for the next few days.
- `src/features/slices/weatherSlice.ts`: Redux slice for managing the weather state and handling asynchronous actions to fetch weather data.
- `src/features/hooks/reducerHook.ts`: Custom hooks for using the Redux store's dispatch and selector functions.
- `src/store.ts`: Configures the Redux store with the weather reducer.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
