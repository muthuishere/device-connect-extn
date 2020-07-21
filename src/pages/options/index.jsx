import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';


import '../../assets/css/materialdesignicons.min.css';

import '../../assets/css/owl.carousel.css';
import '../../assets/css/app.css';
import '../../assets/css/default.css';
import '../../assets/css/options.css';
import { OptionsApp } from './OptionsApp';


render(<OptionsApp />, window.document.querySelector('#root'));
