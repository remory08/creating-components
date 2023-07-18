 import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Sidebar from './components/Sidebar'
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton'
import LoginButton from './components/LoginButton'
import { useAuth0 } from '@auth0/auth0-react';

function App(props) {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Header />
      <Main />
      <Sidebar />
        <LogoutButton />
        <LoginButton/>
        <Profile />
    </>
  )
}

export default App;
 