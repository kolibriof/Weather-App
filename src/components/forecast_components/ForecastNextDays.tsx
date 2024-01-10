import { useWeatherSelector } from "../../features/hooks/reducerHook";

const ForecastNextDays = () => {
	const { forecast } = useWeatherSelector((store) => store.weather);
	const BackgroundImageSetting = (date: string) => {
		let todaysDate = new Date().getDate();
		let forecastDate = new Date(date).getDate();
		if (todaysDate === forecastDate) {
			return true;
		} else {
			return false;
		}
	};
	if (forecast.length >= 1) {
		return (
			<div className='flex flex-col gap-2 justify-between weather-block bg-white rounded-tr-[20%] rounded-tl-[20%] bg-opacity-90'>
				<div className='flex justify-center py-8 font-semibold items-center'>
					<p className='text-[3rem]'>Forecast For Next Days</p>
				</div>
				<div className='flex flex-row justify-evenly mb-10 flex-wrap'>
					{forecast.length >= 1
						? forecast[0].map((e: any) => {
								if (!BackgroundImageSetting(e.date)) {
									return (
										<header
											className='flex flex-col justify-center items-center rounded-xl p-3 shadow-lg bg-white text-2xl gap-5 hover:scale-110 transition-all hover:cursor-pointer hover:shadow-2xl'
											key={e.date}>
											<div>{e.date}</div>
											<div className='flex flex-col items-center'>
												<div className='flex'>
													<p>{e.day.condition.text}</p>
												</div>
												<div className='flex'>
													<img
														src={e.day.condition.icon}
														alt='weather condition'
													/>
												</div>
											</div>
											<div className='flex flex-col'>
												<div className='flex'>{e.day.avgtemp_c + " C"}</div>
											</div>
										</header>
									);
								}

								return "";
						  })
						: ""}
				</div>
			</div>
		);
	} else {
		return null;
	}
};
export default ForecastNextDays;
