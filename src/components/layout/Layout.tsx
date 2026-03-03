import React from 'react'

const Layout = ({children}) => {
  return (
    <div> 
        <header><Header/> </header>
        
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}
