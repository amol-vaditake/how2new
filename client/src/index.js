import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Categories from './components/admin/Categories'
import { Provider, useSelector } from 'react-redux'
import store from './redux/store'
import { Navigate } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff8982'
    },
    secondary: {
      main: '#5B84B1FF'
    }
  }
})

function App() {
  let user = useSelector((state) => state.user)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={user ? <Navigate to='/dashboard' /> : <Login />} />
        <Route exact path='/dashboard' element={user ? <Dashboard /> : <Login />} />
        <Route exact path='/login' element={user ? <Navigate to='/dashboard' /> : <Login />} />
        <Route exact path='/register' element={user ? <Dashboard /> : <Register />} />
        <Route exact path='/categories' element={user ? <Categories /> : <Login />} />
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
)
