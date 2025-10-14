// App.jsx
import './App.css'
import Header from './pages/layout/Header'
import Footer from './pages/layout/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/About'
import Values from './pages/Values'
import NurtureBusiness from './pages/NurtureBusiness'
import TeamMember from './pages/TeamMembers'
import Training from './pages/Training'
import Contact from './pages/Contact'
import "react-toastify/dist/ReactToastify.css";

// Layout wrapper
function Layout() {
  return (
    <>
    
      <Header />
      <Outlet />   {/* Page content will render here */}
      <Footer />
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,   // ✅ Wrap pages in Layout
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "values", element: <Values /> },
        { path: "nurture", element: <NurtureBusiness /> },
        { path: "team", element: <TeamMember /> },
        { path: "training", element: <Training /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
