import './assets/normalize.min.css';
import './assets/monokai.min.css';
import './assets/roboto.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Documentation from './components/documentation';

const documentation = document.createElement('div');
documentation.id = 'documentation';
document.body.appendChild(documentation);

ReactDOM.render(<Documentation />, document.getElementById('documentation'));
