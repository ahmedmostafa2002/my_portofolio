import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFound from './pages/notFound';
import Index from './pages';
import NavBar from './components/navBar';

function App() {
  return (
    <div>
      <NavBar/>
    <Router>
        <div className="flex flex-col">
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
    </Router>
    </div>
  )
}

export default App
