import React from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { RegionProvider } from './context/RegionContext'
import { LocalProvider } from './context/LocalContext'
import { CragsDataProvider } from './context/CragsDataContext'

function App() {

  return (
    <div className="App">
      <CragsDataProvider>
        <RegionProvider>
          <LocalProvider>
            <AppRoutes />
          </LocalProvider>
        </RegionProvider>
      </CragsDataProvider>
    </div>
  )
}

export default App
