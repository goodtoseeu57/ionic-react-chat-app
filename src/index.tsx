import React, { useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const blackTheme = {
  color: 'black'
}

export const ThemeContext = createContext(blackTheme);

const whiteTheme = {
  color: 'white'
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={blackTheme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
