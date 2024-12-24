import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Layout from './layouts/layout'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/create" element={<Layout><Create/></Layout>}/>
        <Route path="/blogs/:id" element={<Layout><BlogDetails/></Layout>}/>
      </Routes>

      {/* <Routes>
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes> */}
    </>
  )
}

export default AppRoutes

