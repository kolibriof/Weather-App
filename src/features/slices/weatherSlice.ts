import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialWeatherState {
	searchValue: string;
	forecast: any[];
	error?: string;
	loading: boolean;
}

const initialState: InitialWeatherState = {
	searchValue: "",
	forecast: [],
	error: "",
	loading: false,
};

export const fetchWeather = createAsyncThunk(
	"weather/fetchWeather",
	async (city: string) => {
		try {
			const req = await axios.get(
				`http://api.weatherapi.com/v1/forecast.json?key=4e9fd92539b24046a4d125728240901&q=${city}&days=7&aqi=no&alerts=no`,
			);
			if (req) {
				return req.data;
			}
			return req;
		} catch (error: any) {
			return error.message;
		}
	},
);

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		setSearchValue: (state, action: PayloadAction<string>) => {
			if (action.payload) {
				state.searchValue = action.payload;
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchWeather.pending, (state, _) => {
				state.loading = true;
			})
			.addCase(fetchWeather.fulfilled, (state, action) => {
				state.loading = false;
				if (action.payload === "Request failed with status code 400") {
					state.error = "Location not found.";
				} else {
					state.error = "";
					console.log(action.payload.forecast.forecastday);

					state.forecast = [action.payload.forecast.forecastday];
				}
			})
			.addCase(fetchWeather.rejected, (state) => {
				state.loading = false;
			});
	},
});

export const { setSearchValue } = weatherSlice.actions;
export default weatherSlice.reducer;
