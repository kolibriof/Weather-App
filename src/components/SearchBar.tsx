import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useWeatherDispatch } from "../features/hooks/reducerHook";
import { fetchWeather } from "../features/slices/weatherSlice";

const SearchBar: React.FC = () => {
	const dispatch = useWeatherDispatch();
	const SearchBarClickHandler = () => {
		const searchBar = document.getElementById("searchBarInput")!;
		searchBar.focus();

		// Rest of the logic
	};
	return (
		<div
			className='flex flex-row w-1/2 bg-cyan-200 p-5 rounded-2xl h-full items-center shadow-md cursor-text'
			onClick={SearchBarClickHandler}>
			<div className='flex flex-1'>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						dispatch(fetchWeather("Wroclaw"));
						// Rest of the logic
					}}>
					<input
						id='searchBarInput'
						type='text'
						placeholder='Enter a city...'
						className='bg-inherit font-normal focus:outline-none placeholder:text-black placeholder:opacity-50 placeholder:tracking-wider placeholder:font-[600]'
					/>
				</form>
			</div>
			<div className='flex'>
				<FontAwesomeIcon icon={faMagnifyingGlass} className='opacity-50' />
			</div>
		</div>
	);
};

export default SearchBar;