
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <nav>Navbar</nav>

     {/* Outlet element renders all children in the router settings */}
     <main className='min-h-screen min-w-screen-2xl px-4 py-6'>
      <Outlet /> 
     </main>
      
    <footer>Footer</footer>
    </>
  )
}

export default App
