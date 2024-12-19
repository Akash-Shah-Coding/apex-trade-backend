import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
