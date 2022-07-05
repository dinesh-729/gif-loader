import Header from '../Header';

import './layout.css';

const Layout = ({children}) => {
    return (
        <div className="content">
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;