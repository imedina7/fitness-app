import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar({ isOpen }) {
    
    const sidebarClasses = useRef('sidebar-container');

    useEffect(() => {
        sidebarClasses.current = `sidebar-container ${(!isOpen) ? 'open' : ''}`
    }, [isOpen])

    return (
        <div className={ sidebarClasses.current }>
            <ul className="sidebar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/map">See locations</Link></li>
                <li><Link to="/admin">Admin panel</Link></li>
            </ul>
        </div>
    )
}
