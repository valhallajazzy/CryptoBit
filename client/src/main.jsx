import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/Router.jsx'
import './assets/styles/index.scss'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { QueryClient, QueryClientProvider } from 'react-query'


//Чтобы при смене окна запрос не отправлялся заного
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router/>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
