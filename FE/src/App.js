import React, { Fragment, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DefaultComponents from './components/DefaultComponents/DefaultComponents'
import { routes } from './routes'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

function App() {
  
  // useEffect(()=>{
  //   fetchApi()
  // },[])
  
  // const fetchApi = async () =>{
  //   const res = await axios({
  //     method:'get',
  //     url: `${process.env.REACT_APP_API_KEY}/product/get-all`,
  //     headers: {'token' : 'Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTZlOTU4NzZkOTU0ODcyZWNlY2UzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDIzMzQyNSwiZXhwIjoxNzEwMjM3MDI1fQ.brxkXIGlOU8-cPZ8umhjpeyAwTddTrrseAH6rHl7tus'}
  //   })
  //   return res.data 
  // }

  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
  // console.log(query)

  return (
    <div>
      <Router>
        <Routes>
          {
            routes.map((route) =>{
              const Page= route.page
              const Layout = route.isShowHeader ? DefaultComponents : Fragment
              return <Route key={route.path} path={route.path} element={
               <Layout>
               <Page/>
               </Layout>
              }/>
            })
          }
        </Routes>
      </Router>
    </div>
  )
}

export default App