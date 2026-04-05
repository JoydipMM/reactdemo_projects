import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { removeAuthUser } from '../utils/slices/authSlice'
import { API_BASE_URL } from '../utils/constants'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.auth.user);
    const [searchQuery, setSearchQuery] = useState("");

    const logouevent = async () => {
        try {
            const res = await axios.post(`${API_BASE_URL}/auth/logout`, {}, { withCredentials: true });
            if (res.status === 200) {
                dispatch(removeAuthUser());
                return navigate("/login");
            }
        } catch (err) {
            if (err.status === 401 || err.status === 404) {
                dispatch(removeAuthUser());
                return navigate("/login");
            }
        }
    }

    const notifications = [
        { id: 1, text: "Gal Gadot sent you a friend request", time: "2m ago", type: "request" },
        { id: 2, text: "Henry Cavill liked your post", time: "15m ago", type: "like" },
        { id: 3, text: "New message from Margot Robbie", time: "1h ago", type: "message" }
    ];

    return (
        <div className="navbar bg-neutral border-b border-white/5 sticky top-0 z-[100] backdrop-blur-md px-4">
            {/* Left: Brand */}
            <div className="_flex-1 gap-2">
                <Link to="/" className="flex items-center gap-2 px-2 hover:opacity-80 transition-opacity">
                    <div className="bg-primary p-1.5 rounded-xl shadow-lg shadow-primary/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent hidden sm:block">
                        GravitySocial
                    </span>
                </Link>
            </div>

            {/* Center: Search Bar (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-center px-4">
                <div className="relative w-full max-w-md group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/30 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for friends, posts..."
                        className="input h-10 w-full pl-10 pr-20 bg-white/10 border-none rounded-2xl focus:ring-2 focus:ring-primary/50 text-white placeholder-white/30 transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute inset-y-1.5 right-1.5 hidden sm:flex items-center">
                        <kbd className="kbd kbd-sm bg-black/20 border-white/10 text-white/40">Ctrl</kbd>
                        <kbd className="kbd kbd-sm bg-black/20 border-white/10 text-white/40 ml-1">K</kbd>
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex-none gap-2">
                {/* Search (Mobile) */}
                <button className="btn btn-ghost btn-circle lg:hidden text-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>

                {/* Notifications */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white/70 hover:text-white transition-colors relative">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-error badge-xs indicator-item border-none shadow-sm shadow-error/50"></span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[150] card card-compact dropdown-content w-80 bg-base-100 shadow-2xl border border-base-200 rounded-3xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="card-body p-0">
                            <div className="p-4 border-b border-base-200 flex justify-between items-center bg-base-100/50 backdrop-blur-md">
                                <span className="font-bold text-lg">Notifications</span>
                                <span className="text-xs text-primary font-bold cursor-pointer hover:underline">Mark all as read</span>
                            </div>
                            <div className="max-h-96 overflow-y-auto divide-y divide-base-200">
                                {notifications.map(n => (
                                    <div key={n.id} className="p-4 hover:bg-base-200 transition-colors cursor-pointer flex gap-3 group">
                                        <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${n.type === 'request' ? 'bg-primary' : 'bg-success/50'}`}></div>
                                        <div className="flex-1">
                                            <p className="text-sm leading-snug text-base-content group-hover:text-primary transition-colors">{n.text}</p>
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-base-content/40 mt-1 block">{n.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-ghost btn-sm w-full rounded-none border-t border-base-200 text-xs py-4 font-bold">See All Notifications</button>
                        </div>
                    </div>
                </div>

                {/* Profile */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar h-11 w-11 hover:scale-105 active:scale-95 transition-all">
                        <div className="w-10 rounded-2xl ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                            <img
                                alt="User Avatar"
                                src={user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Joy"} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[150] mt-3 w-52 p-2 shadow-2xl bg-base-100 rounded-3xl border border-base-200 animate-in slide-in-from-top-2 duration-200 overflow-hidden">
                        <li className="menu-title px-4 py-2 border-b border-base-200 mb-1 opacity-50">Account</li>
                        <li>
                            <Link to="/profile" className="justify-between py-2.5 rounded-2xl">
                                My Profile
                                <span className="badge badge-primary badge-sm font-bold">Online</span>
                            </Link>
                        </li>
                        <li><a className="py-2.5 rounded-2xl">Settings</a></li>
                        <div className="border-t border-base-200 my-1"></div>
                        <li><Link onClick={logouevent} className="text-error font-bold py-2.5 rounded-2xl hover:bg-error hover:text-white transition-all">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
