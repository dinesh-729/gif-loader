import SearchBar from "../searchBar";
import { useQueryParams } from "../../lib/hooks/query-hook";
import "./header.css";

const Header = () => {
    const queryParams = useQueryParams();
    const searchPlaceHolder = "Search for GIFs and Stickers";
    const searchText = queryParams?.q?.replaceAll('+',' ') ?? null;

    return(
       <header className="page-header">
            <div className="wrapper">
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
                        searchText={searchText}
                    />
                </div>
            </div>
       </header>
    )
}

export default Header;