import React from 'react';
import { render } from 'react-dom';

import "./assets/favicon";
import "./assets/scss/ey-font.scss";
import "./assets/scss/base.scss";
import "./assets/scss/helpers.scss";

import Main from "./components/Main";

const rootElement = document.getElementById('root');
rootElement ? render(<Main />, rootElement) : false;