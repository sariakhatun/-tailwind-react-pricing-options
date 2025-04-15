import React, { useState } from 'react';
import Link from './Link';
import { Menu,X } from 'lucide-react';

const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Projects", path: "/projects" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  

const Navbar = () => {
    let [open,setOpen]=useState(false)
    let links =  navLinks.map(route=> <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10 my-2 text-black'>
           <span className='flex' onClick={()=>setOpen(!open)}> 
            {   
                open?
            <X className='md:hidden'></X> : 
            <Menu className='md:hidden'></Menu>
            }
            <ul className={`md:hidden absolute duration-1000 ${open ? 'top-8':'-top-40'} bg-amber-200 `}>
            
                {
                  links
                }
            
            </ul>
          
           <h3>My Navbar</h3>
           </span>
           <ul className='md:flex gap-10 mx-10 hidden '>
           {
               links
            }
           </ul>
           <button>Sign in</button>
            {/* <ul className='flex'>
               {navLinks.map(route =><li className='mr-10'><a href={route.path}>{route.name}</a></li>)     }   
            </ul> */}
            {/* <ul className='flex gap-4'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/">About</a></li>
                <li className='mr-10'><a href="/">Blog</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;