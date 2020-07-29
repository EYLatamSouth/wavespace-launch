import React from 'react';
import { render } from 'react-dom';

import "./assets/favicon/favicon";
import "./assets/scss/main.scss";

import Main from "./components/Main";

const rootElement = document.getElementById('root');
rootElement ? render(<Main />, rootElement) : false;