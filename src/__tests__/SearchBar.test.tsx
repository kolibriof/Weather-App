import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchBar from "../components/SearchBar";

test("renders SearchBar component without crashing", () => {
	render(
		<Provider store={store}>
			<SearchBar />
		</Provider>,
	);
});

test("search input updates correctly", () => {
	const { getByTestId } = render(
		<Provider store={store}>
			<SearchBar />
		</Provider>,
	);
	const searchInput = getByTestId("search-input") as HTMLInputElement;
	fireEvent.change(searchInput, { target: { value: "New York" } });
	expect(searchInput.value).toBe("New York");
});
