import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import { ChartProvider } from './contexts/ChartContext'
import { AppProvider } from './contexts/AppContext'

function App() {

  return (
    <AppProvider>
      <ChartProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
      </ChartProvider>
    </AppProvider>
  )
}

export default App
