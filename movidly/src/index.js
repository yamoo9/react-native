import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

import './index.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'
import * as serviceWorker from './serviceWorker'

library.add(faHeart, farHeart)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
