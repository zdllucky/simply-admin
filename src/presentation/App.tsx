import StyleProvider from "./StyleProvider";
import { index } from "../app/store";
import { FC } from "react";
import { Provider as StoreProvider } from "react-redux";

const AppWithStyles: FC = () => <StyleProvider>Text</StyleProvider>;

const AppWithStore: FC = () => (
  <StoreProvider store={index}>
    <AppWithStyles />
  </StoreProvider>
);

export default AppWithStore;
