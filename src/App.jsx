

import { Route,Routes } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage'
import ProductsPage from './pages/ProductsPage'
import  Sidebar  from './components/Sidebar'
function App() {
  

  return (
    <div className=' flex bg-gray-900 text-gray-100 overflow-hidden'>
      <div className='fixed inset-0 z-0'>
       <div className='absolute inset-0 bg-gradient-to-br from-gray-800 via to-gray-900 opacity-80'/>
       <div className='absolute insert-0 backdrop-blur-sm '/>
      </div>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<OverviewPage />}/>
        <Route path='/products' element={<ProductsPage />}/>
      </Routes>
    </div>
  )
}

export default App
