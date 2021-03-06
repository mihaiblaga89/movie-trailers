import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

/* global document */

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
