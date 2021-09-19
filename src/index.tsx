import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { render } from 'react-dom';
// @ts-ignore
// 1: some issue with fileimporting that you cant import tsx files.
// Omitting rule until I can find out something interesting with this.
import App from './components/App.tsx';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
