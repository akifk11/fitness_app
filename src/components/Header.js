import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return <>
        <div className="header">

            <div className="icon">
                <h4>fitness app</h4>
            </div>
            <div className="links">
                <ul>
                    <li><NavLink to="yagoraninedir">
                        {({ isActive }) => (
                            <span
                                className={
                                    isActive ? "active" : undefined
                                }
                            >
                                yagoraninedir
                            </span>
                        )}
                    </NavLink></li>
                    <li><NavLink to="yagoranihesapla">
                        {({ isActive }) => (
                            <span
                                className={
                                    isActive ? "active" : undefined
                                }
                            >
                                yagoranihesapla
                            </span>
                        )}
                    </NavLink></li>
                    <li><NavLink to="bminedir">
                        {({ isActive }) => (
                            <span
                                className={
                                    isActive ? "active" : undefined
                                }
                            >
                                bminedir
                            </span>
                        )}
                    </NavLink></li>
                    <li><NavLink to="bmihesapla">
                        {({ isActive }) => (
                            <span
                                className={
                                    isActive ? "active" : undefined
                                }
                            >
                                bmihesapla
                            </span>
                        )}
                    </NavLink></li>
                    <li><NavLink to="program">
                        {({ isActive }) => (
                            <span
                                className={
                                    isActive ? "active" : undefined
                                }
                            >
                                Program
                            </span>
                        )}
                    </NavLink></li>
                </ul>
            </div>
        </div>
    </>
};

export default Header;
