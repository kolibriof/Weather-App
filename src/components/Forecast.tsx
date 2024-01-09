import { useWeatherSelector } from "../features/hooks/reducerHook";

const Forecast = () => {
	const { forecast, loading } = useWeatherSelector((store) => store.weather);
	if (loading) {
		return <div className='text-[25px]'>Loading....</div>;
	}
	return (
		<section className='flex flex-row gap-3 '>
			{forecast.length >= 1
				? forecast[0].map((e: any) => {
						return (
							<header
								className='flex flex-row gap-8 justify-center items-center bg-cyan-300 rounded-xl p-3 shadow-lg'
								key={e.date}>
								<div className='flex flex-col'>
									<div className='flex'>
										<p>{e.day.condition.text}</p>
									</div>
									<div className='flex'>
										<img src={e.day.condition.icon} alt='weather condition' />
									</div>
								</div>
								<div className='flex flex-col'>
									<div className='flex'>Date: {e.date}</div>
									<div className='flex'>Avg temp: {e.day.avgtemp_c + " C"}</div>
								</div>
							</header>
						);
				  })
				: ""}
		</section>
	);
};

export default Forecast;
