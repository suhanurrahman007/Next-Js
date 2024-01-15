import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <h2>This is Navbar</h2>
            {children}
            <h2>This is Footer</h2>
        </div>
    );
};

export default Layout;