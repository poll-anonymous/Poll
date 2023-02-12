import Script from 'next/script'
import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


export default function Layout({children}) {
  return (
    <>
     {/* <div class="loader"><div class="loader_html"></div></div> */}
          <div id="wrap" class="grid_1200">
    <Header />
    {children}
    <Footer />
    </div>
    <div className="go-up"><i class="icon-chevron-up"></i></div>
    
    </>
  )
}
