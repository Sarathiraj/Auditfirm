import * as React from "react";
import styles from "./AdatProject.module.scss";
import { IAdatProjectProps } from "./IAdatProjectProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../globalcomponents/theme/theme";
// import Navbar from "./folder1/folder2/folder3/header/Navbar";
// import Icons from "./folder1/folder2/folder3/header/Icons";
// import Tablebar from "./folder1/folder2/folder3/Table/Tablebar";
// import TermsandCondition from "./folder1/folder2/folder3/Tureandfair/TermsandCondition";
// import Navbarempty from "./folder1/folder2/folder3/header/Navbarempty";
import TrueandFair from "./Tureandfair";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux/es/exports";
import tnfreducer from "../../../globalcomponents/redux/tnfreducer";
const store = configureStore({
  reducer: { tnfreducer },
});

export default function AdatProject() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {/* <Navbar /> */}

          {/* <div className="table_content">
          <Tablebar />
        </div> */}
          {/* <Navbarempty /> */}
          <TrueandFair />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
