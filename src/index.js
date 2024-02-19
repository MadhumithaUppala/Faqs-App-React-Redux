import React from 'react'

import ReactDOM from 'react-dom'

import {configureStore} from '@reduxjs/toolkit'

import App from './App'

import faqReducer from './reducers/faqReducer'

const store = configureStore({
  reducer: {
    Faqs: faqReducer,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
