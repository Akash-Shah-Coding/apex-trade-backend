import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Banner from '../partials/Banner'

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {/*  Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <main className="grow">
                        {children}
                    </main>
                    </div>
                </div>
            </div>
            <Banner />
        </>
    );
};

export default Layout;
