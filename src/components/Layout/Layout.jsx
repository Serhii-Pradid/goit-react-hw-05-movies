import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Nav, StyleNavLink} from './Layout.styled';


const Layout = () => {
    return (
        <div>
            <header>
             <Nav>
          <li>
      <StyleNavLink to='/'>Home</StyleNavLink>
          </li>
          <li>
      <StyleNavLink to='/movies'>Movies</StyleNavLink>
          </li>
             </Nav>
             </header>
        <main>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
        </Suspense>
        </main>
        <footer>
        </footer>
      
      </div>
    )
};

export default Layout;
