
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { reportWebVitals } from '@/lib/performanceMonitoring.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<App />
);

// Initialize performance monitoring
reportWebVitals();
