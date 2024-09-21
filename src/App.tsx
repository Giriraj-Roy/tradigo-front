import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import { ChartProvider } from './contexts/ChartContext'

function App() {

  return (
    <ChartProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </ChartProvider>
  )
}

export default App
