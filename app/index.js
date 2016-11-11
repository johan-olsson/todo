import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'

/** how it works
  React
    ↓
  react-redux
    ↓
  redux → applyMiddleware(thunk)
    ↓
  react-router-redux
    ↓
  history
    ↓
  react-router
*/


const history = syncHistoryWithStore(hashHistory, store)

import Container from './components/Container'
import App from './components/App'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={Container} >
          <IndexRoute components={{page: App}} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
