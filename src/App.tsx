import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import LayoutHeader from 'components/layouts/Header/Header'
import React from 'react'

function App() {
    const location = new ReactLocation()
    return (
        // <div>
        //     <LayoutHeader />
        //     <div>test</div>
        // </div>
        <Router
            location={location}
            routes={[
                { path: '/', element: <div /> }, // home
                {
                    path: 'blogs',
                    children: [
                        { path: '/', element: <div>blog</div> }, // blogs
                        {
                            path: ':name',
                            element: <div>param</div>,
                        },
                    ],
                },
            ]}
        >
            <LayoutHeader />
            <Outlet /> {/* Start rendering router matches */}
        </Router>
    )
}

export default App
