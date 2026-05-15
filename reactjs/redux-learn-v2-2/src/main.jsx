import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Provider } from 'react-redux'
// import store from './app/store.js'
import ReduxProvider from '@/app/provider/ReduxProvider'
import QueryProvider from '@/app/provider/QueryProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </ReduxProvider>
  </StrictMode>,
)
