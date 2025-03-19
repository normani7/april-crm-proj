import { Outlet } from 'react-router-dom';
import Header from './../components/Header';

const DefaultLayout = ({children}) => {
    return (
        <div className="default-layout">
            <Header />
            <div className='container'>
                <Outlet />
            </div>
            <footer>
                <div className="container">
                    <p>&copy; All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default DefaultLayout;