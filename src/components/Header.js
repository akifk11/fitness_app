import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return <>
        <div className="header">

            <div className="icon">
                <a href="/">
                    <i class="fa-solid fa-dumbbell"></i>
                </a>
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
                                Yağ oranı nedir?
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
                                Yağ oranı hesapla
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
                                Vki nedir?
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
                                Vki hesapla
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
