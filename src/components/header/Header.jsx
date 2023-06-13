import React from 'react'
import { logo } from '../../assets'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const Header = () => {
    return (
        <div>
            <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-3'>
                {/* ------------------      IMAGE STARTS HERE -------------------- */}
                <div className='headerHover'>
                    <img src={logo} className='w-24 mt-2' alt="logo" />
                </div>
                {/* Deliver start here */}
                <div className='headerHover'>
                    <LocationOnOutlinedIcon />
                    <p className='text-sm text-lightText font-light flex flex-col '>Deliver to {""}
                        <span className='text-sm font-semibold -mt-1 text-whiteText'>Delhi India</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header
