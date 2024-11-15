import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./state/store";
import { LanguageProvider } from "./util/LanguageContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <LanguageProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </LanguageProvider>
  </StrictMode>,
)
