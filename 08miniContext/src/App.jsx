
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <div className='bg-gray-700'>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App