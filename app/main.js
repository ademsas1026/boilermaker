import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store.js'
import Root from './components/Root.jsx';
import '../public/index.css';

// render(<div>wassup?</div>, document.getElementById('app'));

render(<Provider store={store}><Root /></Provider>, document.getElementById('app'));