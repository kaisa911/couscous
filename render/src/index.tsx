import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routers/index';
import '@/assets/styles/reset.less';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
