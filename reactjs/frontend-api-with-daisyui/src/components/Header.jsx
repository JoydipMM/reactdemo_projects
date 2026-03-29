import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeAuthUser } from '../utils/slices/authSlice'
import { API_BASE_URL } from '../utils/constants'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logouevent = async () => {
        try{
            const res = await axios.post(`${API_BASE_URL}/auth/logout`,{}, { withCredentials:true });
            //console.log(res.status);
            if(res.status === 200){
                return navigate("/login");
            }
        }catch(err){
            //console.log(err.status);
            if(err.status === 404){
              dispatch(removeAuthUser());
              return navigate("/login");
            }
        }
    }



    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><Link onClick={logouevent}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
