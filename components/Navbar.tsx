'use client';

import { navLinks } from '@/constants'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const Navbar = () => {
    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[])


  return (
    <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
        <div className='inner'>
            <Link href="#hero" className='logo' >
                Ihsaan | Md
            </Link>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(({link,name}) => (
                        <li key={name} className='group'>
                            <Link href={link}>
                            <span>
                                {name}
                            </span>
                            <span className='underline'/>
                                
                            </Link>
                            

                        </li>
                    ))}
                </ul>


            </nav>

            <Link href={'#contact'} className='contact-btn group'>
                <div className='inner'>
                    <span>Contact me</span>
                </div>
            </Link>

        </div>

    </header>
  )
}

export default Navbar
