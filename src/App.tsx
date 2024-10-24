
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import Layout from './components/layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
            </Route>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
