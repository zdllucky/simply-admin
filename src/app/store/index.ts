import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import themeReducer from "./slices/theme";
import { e } from "../../helpers";
import { exampleApi } from "./services/example/api";

export const index = configureStore({
  reducer: {
    [exampleApi.reducerPath]: exampleApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();

    if (e`NODE_ENV` === "development") middlewares.concat(logger);

    return middlewares;
  },
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
