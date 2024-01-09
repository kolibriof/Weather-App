import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialWeatherState {
	name: string;
}

const initialState: InitialWeatherState = {
	name: "",
};

export const fetchWeather = createAsyncThunk(
	"weather/fetchWeather",
	async (city: string) => {
		try {
			const req = await axios.get(
				`http://api.weatherapi.com/v1/forecast.json?key=4e9fd92539b24046a4d125728240901&q=${city}&days=1&aqi=no&alerts=no`,
			);
			return req.data;
		} catch (error: any) {
			throw new Error("There was an error" + error.message);
		}
	},
);

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchWeather.pending, (state, payload) => {})
			.addCase(fetchWeather.fulfilled, (state, payload) => {
				console.log("success");
				console.log(payload);
			})
			.addCase(fetchWeather.rejected, (state, payload) => {
				console.log("error");
			});
	},
});

export const {} = weatherSlice.actions;
export default weatherSlice.reducer;
