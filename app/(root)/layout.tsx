import React from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <main className='root-container'>
        <div className='mx-auto max-w-7xl'></div>
        Header
        <div className='mt-20 pb-20'>{children}</div>

    </main>
  )
}

export default Layout
