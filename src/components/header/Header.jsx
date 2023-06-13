import React, { useState } from 'react'
import { logo } from '../../assets'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { allItems } from '../../constants';


const Header = () => {
    const [showAll, setShowAll] = useState(false);
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
                    <p className='text-sm text-lightText font-light flex flex-col'>Deliver to {""}
                        <span className='text-sm font-semibold -mt-1 text-whiteText'>Delhi India</span>
                    </p>
                </div>
                {/* Deliver end here */}
                {/* SEARCH STARTS HERE */}
                <div className='h-10 rounded-md flex flex-grow relative'>
                    <span
                        onClick={() => setShowAll(!showAll)}
                        className='w-14 h-full bg-gray-200 hover:bg-gray-200 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md font-semibold'>
                        All<span></span><ArrowDropDownOutlinedIcon />
                    </span>
                    {showAll && <div>
                        <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-srcoll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                            {
                                allItems.map((item) => {
                                    return <li key={item._id} className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'> {item.title}</li>
                                })
                            }
                        </ul>
                    </div>
                    }
                    <input type="text" className='h-full text-base text-amazon_blue flex flex-grow outline-none border-none px-2' />
                    <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                        <SearchOutlinedIcon />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
