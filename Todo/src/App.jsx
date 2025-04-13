import './App.css'
import Input from './components/Input'
import TodoItems from './components/TodoItems'
import TodoContext from './store/TodoContext'

function App() {


  return (
    <TodoContext>

    <div className='h-screen w-screen flex  items-center flex-col bg-[url("/bg.jpg")] bg-cover overflow-x-hidden'>

      <Input />

      <TodoItems />
    </div>
    </TodoContext>
    
  )
}

export default App
