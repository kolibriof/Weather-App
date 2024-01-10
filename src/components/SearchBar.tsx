import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
	useWeatherDispatch,
	useWeatherSelector,
} from "../features/hooks/reducerHook";
import { fetchWeather, setSearchValue } from "../features/slices/weatherSlice";
import "../styles/searchBarStyle.css";

const SearchBar: React.FC = () => {
	const dispatch = useWeatherDispatch();
	const { searchValue } = useWeatherSelector((store) => store.weather);
	const SearchBarClickHandler = () => {
		const searchBar = document.getElementById("searchBarInput")!;
		searchBar.focus();
	};
	const forecastHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchValue) {
			dispatch(fetchWeather(searchValue));
		}
	};
	return (
		<section className='h-[20%] w-full flex justify-center items-start pt-3'>
			<div
				className='initialBarRender flex flex-row w-[50%] bg-cyan-200 p-5 rounded-2xl items-center shadow-md cursor-text'
				onMouseOver={() => {}}
				onClick={SearchBarClickHandler}>
				<div className='flex flex-1'>
					<form onSubmit={forecastHandler}>
						<input
							id='searchBarInput'
							type='text'
							onChange={(e) => dispatch(setSearchValue(e.target.value))}
							placeholder='Enter a city...'
							className='bg-inherit font-normal focus:outline-none placeholder:text-black placeholder:opacity-50 placeholder:tracking-wider placeholder:font-[600]'
						/>
					</form>
				</div>
				<div className='flex'>
					<FontAwesomeIcon icon={faMagnifyingGlass} className='opacity-50' />
				</div>
			</div>
		</section>
	);
};

export default SearchBar;
