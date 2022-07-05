import SearchBar from "../searchBar";

import "./header.css";

const Header = () => {
    const searchPlaceHolder = "Search for GIFs and Stickers";

    return(
       <header className="page-header">
            <a href="/" className="logo">
                <img 
                    src="/images/tenor-logo.svg"
                    width={80}
                    height={22}
                    alt="tenor"
                />
           </a>
            <div className="search-bar">
                <SearchBar 
                    placeholder={searchPlaceHolder}
                />
            </div>
       </header>
    )
}

export default Header;