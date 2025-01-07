import React from "react";
import { useWeatherSelector } from "../features/hooks/reducerHook";
import "../styles/blocksStyle.css";
import ForecastNextDays from "./forecast_components/ForecastNextDays";

const Forecast = () => {
	const { forecast, loading, error } = useWeatherSelector(
		(store) => store.weather,
	);
	if (loading) {
		return <div className='text-[25px]' data-testid='loading'>Loading....</div>;
	}
	if (error) {
		return <div className='text-[25px]' data-testid='error'>{error}</div>;
	}
	const BackgroundImageSetting = (date: string) => {
		let todaysDate = new Date().getDate();
		let forecastDate = new Date(date).getDate();
		if (todaysDate === forecastDate) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<section className='flex flex-col flex-grow gap-3 min-w-[100%] min-h-80 justify-between'>
			<div className='flex weather-block justify-center'>
				{forecast.length >= 1
					? forecast[0].map((e: any) => {
							if (BackgroundImageSetting(e.date)) {
								return (
									<header
										key={e.date}
										className='flex flex-row items-center justify-center w-full px-20 drop-shadow-xl'>
										<div className='text-[3rem] flex flex-grow'>
											<img src={e.day.condition.icon} alt='current_condition' />
											{e.day.condition.text}
										</div>
										<div className='text-[5rem] flex drop-shadow-xl'>
											{e.day.avgtemp_c + "°C"}
										</div>
									</header>
								);
							}
							return "";
					  })
					: ""}
			</div>
			<ForecastNextDays />
		</section>
	);
};

export default Forecast;
