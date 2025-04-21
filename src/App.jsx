import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBlog from './components/AddBlog'
import Blog from './components/Blogs'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import BlogDetails from './components/BlogDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/addBlog' element={<AddBlog />} />
          <Route path='/blogDetails/:id' element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
