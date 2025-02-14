import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Search from './pages/Search'
import DatasetDetails from './pages/DatasetDetails'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dataset/:id" element={<DatasetDetails />} />
      </Route>
    </Routes>
  )
}

export default App 