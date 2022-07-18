import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { slide as Menu } from "react-burger-menu"

export default function Navbar() {
    return (
        <div className="outer-container">
            <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                <nav className="nav">
                    <Link to="/" className="site-title">Owen Bovill</Link>
                    <ul>
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/about">About</CustomLink>
                        <CustomLink to="/projects">Projects</CustomLink>
                        <CustomLink to="/contact">Contact Me</CustomLink>
                    </ul>
                </nav >
            </Menu>
        </div>
    )
}


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}