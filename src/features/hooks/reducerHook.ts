import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../../store";

export const useWeatherDispatch: () => AppDispatch = useDispatch;
export const useWeatherSelector: TypedUseSelectorHook<RootState> = useSelector;
