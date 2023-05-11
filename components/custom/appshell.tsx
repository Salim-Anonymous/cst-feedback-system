import React from 'react'
import Sidebar from './sidebar'
import Header from './header'

type AppShellProps = {
    children: React.ReactNode
}

function Appshell({children}:AppShellProps) {

    return (
    <div
        className='w-full h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-r'
    >
        <div
            className='fixed top-0 min-h-screen right-0 w-3/4 pt-16 bg-white dark:bg-white/20 bg-backdrop bg-filter'
        >
            {children}
        </div>
        <div
            className='fixed left-0 shadow-xl top-0 pt-16 w-1/4 h-screen bg-white dark:bg-black/20 bg-backdrop bg-filter'
        >
            <Sidebar />
        </div>
        <div
            className='fixed h-16 shadow-lg top-0 right-0 w-full bg-white dark:bg-black/90 bg-backdrop bg-filter'
        >
            <Header />
        </div>
    </div>
  )
}

export default Appshell