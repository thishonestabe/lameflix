import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "../app/Routes";

import { LayoutSplashScreen, MaterialThemeProvider } from "./layout/_core_metronic/layout";

export default function App({ store, persistor, basename }) {
  return (
      /* Provide Redux store */
      <Provider store={store}>

        <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>

          <React.Suspense fallback={<LayoutSplashScreen />}>

            <BrowserRouter basename={basename}>

              <MaterialThemeProvider>

                  <Routes />

              </MaterialThemeProvider>
            </BrowserRouter>
          </React.Suspense>
        </PersistGate>
      </Provider>
  );
}
