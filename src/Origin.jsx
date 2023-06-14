import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateNews from './pages/CreateNews'
import ViewNews from './pages/ViewNews'
import Nav from './components/Nav'
import Menu from './components/Menu'
import Backdrop from './components/Backdrop'
import Preloader from './components/Preloader'
import Loader from './components/Loader'
import Oops from './pages/Oops'

function Origin() {
  const [viewingNews, setViewingNews] = useState({
    headline: "Tinubu awards Idan TV as TV station of the decade",
    subHeadline: "Idan TV has been awarded by the Federal Government of Nigeria for its vigorous and timely approach to sharing Breaking News...",
    imgUrl: "https://cdn.punchng.com/wp-content/uploads/2022/06/09141433/Bola-Tinubu-.jpg",
    newsType: "local",
    imgFile: ""
  })

  function createNews(news){
    setViewingNews({...news})
  }

  return (
    <BrowserRouter>
      <div className='origin'>
        <Nav />
        <Menu />
        <Backdrop />
        <Preloader />
        <Loader />
        <Routes>
            <Route path='/' element={<ViewNews news={viewingNews} />}/>
            <Route path='/news' element={<ViewNews news={viewingNews} />}/>
            <Route path='/create' element={<CreateNews createNews={createNews} />}/>
            <Route path='/*' element={<Oops />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Origin
