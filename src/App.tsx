import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";

const App = () => {
	return (
		<section className='flex flex-col items-center min-h-screen gap-5 overflow-y-hidden'>
			<SearchBar />
			<Forecast />
		</section>
	);
};

export default App;
