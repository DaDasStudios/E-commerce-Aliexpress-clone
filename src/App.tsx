import Homepage from './pages/Homepage/'
import Header, { Search } from './components/layout/header/'

// React router dom
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main className='has-background-light' style={{
      height: "100vh"
    }}>
      <Header></Header>
      <Search></Search>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </main>
  )
}

export default App
