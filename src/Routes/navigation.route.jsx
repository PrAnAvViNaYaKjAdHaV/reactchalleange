/** @format */

import Navbar from '../components/nav_bar/navbar.components';
import Footer from '../components/footer/footer.component';
import { Outlet } from 'react-router-dom';
export default function Navigation() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
