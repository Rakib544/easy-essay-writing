import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <div style={{ backgroundColor: '#0254F9', color: 'white' }}>
            <div className="container pt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <Image src={logo} height="50px" width="130px" alt="" />
                    <div>
                        <Link href="/"><a className="mx-3">Sign Up</a></Link>
                        <Link href="/"><a>Log In</a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;