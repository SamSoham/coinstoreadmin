
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import Layout from './components/layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TopupList from './pages/TopupList';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='/topuplist' element={<TopupList/>}/>
            </Route>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
