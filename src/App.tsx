import React from "react";
import SearchBar from "./components/SearchBar";
import { useWeatherSelector } from "./features/hooks/reducerHook";
import Forecast from "./components/Forecast";

const App = () => {
	const { error } = useWeatherSelector((store) => store.weather);
	return (
		<section className='flex flex-col justify-center w-full h-full items-center min-h-80 gap-5'>
			<SearchBar />
			<p className='error-message flex'>{error}</p>
			<Forecast />
		</section>
	);
};

export default App;
