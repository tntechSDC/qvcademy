import React from 'react';
import { NavLink } from "react-router-dom";

export default function SideNav() {
    return (
        <div className="fixed inset-y-14 left-0 w-36 bg-purple bg-opacity-40 rounded-sm text-pink">
            <div className="p-4 text-xl text-pink font-mono border-b border-pink">
                Languages
            </div>
            <nav className="mt-4">
                <ul>
                    <li className="px-4 py-2 text-pink hover:bg-purple">
                        <NavLink to="/get-started">C++</NavLink>
                    </li>
                    <li className="px-4 py-2 text-pink hover:bg-purple">
                        <NavLink to="/get-started">C</NavLink>
                    </li>
                    <li className="px-4 py-2 text-pink hover:bg-purple">
                        <NavLink to="/get-started">C#</NavLink>
                    </li>
                    <li className="px-4 py-2 text-pink hover:bg-purple">
                        <NavLink to="/get-started">Swift</NavLink>
                    </li>
                    <li className="px-4 py-2 text-pink hover:bg-purple">
                        <NavLink to="/get-started">Kotlin</NavLink>
                    </li>
                    <li className="px-4 py-2 text-pink hover:bg-purple">
                        <NavLink to="/get-started">Dart</NavLink>
                    </li>
                    <li className="px-4 py-2 text-pink hover:bg-purple">
                        <NavLink to="/get-started">Ruby</NavLink>
                    </li>
                    <li className="px-4 py-2 text-pink hover:bg-purple">
                        <NavLink to="/get-started">Java</NavLink>
                    </li>
                    <li className="px-4 py-2 text-pink hover:bg-purple">
                        <NavLink to="/get-started">Javascript</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}