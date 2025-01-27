import { useState } from "react";
import { useWeatherSelector } from "../../features/hooks/reducerHook";
import moment from "moment";

const ForecastNextDays = () => {
	const [hidden, setHidden] = useState(false);
	const { forecast } = useWeatherSelector((store) => store.weather);

	const isToday = (date: string) => {
		let todaysDate = new Date().getDate();
		let forecastDate = new Date(date).getDate();
		return todaysDate === forecastDate;
	};

	if (forecast.length >= 1) {
		return (
			<div
				className={`flex flex-col gap-2 justify-between weather-block bg-cyan-100 ${
					hidden
						? `rounded-tr-[1%] rounded-tl-[1%]`
						: `rounded-tr-[20%] rounded-tl-[20%]`
				} bg-opacity-90 transition-all duration-700 ease-out  ${
					hidden ? `translate-y-[80%]` : `translate-y-[0%]`
				}`}
				id='weather-footer'>
				<div className='hide-bar flex justify-center'>
					<img
						onClick={() => setHidden(!hidden)}
						className='cursor-pointer py-3 drop-shadow-xl'
						width='40'
						height='40'
						src={`https://img.icons8.com/material-outlined/96/${
							hidden ? `visible--v1` : `hide`
						}.png`}
						alt='hide'
						data-testid='hide-button'
					/>
				</div>
				<div className='flex flex-row justify-evenly mb-10 flex-wrap'>
					{forecast[0].map((e: any) => {
						if (!isToday(e.date)) {
							return (
								<header
									className='flex flex-row justify-center items-center rounded-xl p-3 shadow-lg bg-cyan-100 text-2xl gap-5 hover:scale-110 transition-all hover:cursor-pointer hover:shadow-2xl'
									key={e.date}>
									<div className='flex justify-center flex-col items-center gap-2 p-2'>
										<div>{moment(e.date).format("MMM Do")}</div>
										<div className='flex flex-col items-center'>
											<div className='flex'>
												<p>{e.day.condition.text}</p>
											</div>
											<div className='flex'>
												<img
													className='drop-shadow-lg'
													src={e.day.condition.icon}
													alt='weather condition'
												/>
											</div>
										</div>
										<div className='flex flex-col font-bold text-[2rem]'>
											<div className='flex'>{e.day.avgtemp_c + "°C"}</div>
										</div>
									</div>
								</header>
							);
						}
						return null;
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default ForecastNextDays;
