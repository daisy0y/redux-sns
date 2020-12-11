import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_search">
                    <SearchIcon className="sidebar_searchIcon"/>
                    <input placeholder="검색" className="sidebar_input"></input>
                </div>
            </div>
            <div className="sidebar_threads"></div>
            <div className="sidebar_bottom"></div>
        </div>
    )
}

export default Sidebar
