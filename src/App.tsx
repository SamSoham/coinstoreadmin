
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import Layout from './components/layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TopupList from './pages/TopupList';
import WalletAction from './pages/WalletAction';
import Purchase from './pages/Purchase';
import Payment from './pages/Payment';
import Announcement from './pages/Announcement';

const ProtectedRoute = ({children} : {children: any})=>{
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  if(token && user) return children
  else return <Navigate to="/login"/>
}

const AuthProtectedRoute = ({children} : {children: any})=>{
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  if(!token && !user) return children
  else return <Navigate to="/"/>
}

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path='/topuplist' element={<ProtectedRoute><TopupList /></ProtectedRoute>} />
            <Route path='/wallet-action' element={<ProtectedRoute><WalletAction /></ProtectedRoute>} />
            <Route path='/purchase' element={<ProtectedRoute><Purchase/></ProtectedRoute>}/>
            <Route path='/payment' element={<ProtectedRoute><Payment/></ProtectedRoute>}/>
            <Route path='/announcement' element={<ProtectedRoute><Announcement/></ProtectedRoute>}/>
          </Route>
          <Route path='/signup' element={<AuthProtectedRoute><SignUp /></AuthProtectedRoute>} />
          <Route path='/login' element={<AuthProtectedRoute><SignIn /></AuthProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
