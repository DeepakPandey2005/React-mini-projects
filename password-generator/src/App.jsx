import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './components/Input'
import Password from '../store/Password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Password>

    <h1 className='text-center font-bold'>Password Generator App</h1>
  <div className='flex justify-center align-middle'>
    <div className='outline-1 m-4 p-1 rounded-2xl my-20'>
<Input/>
    </div>
  </div>
    </Password>
  )
}

export default App
