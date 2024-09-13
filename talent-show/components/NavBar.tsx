import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from 'next/link';
import { Button } from "@nextui-org/button";

const NavBar = () => {
    return (
        <Navbar className='bg-black py-4 text-2xl gap-x-4'>
            <NavbarBrand>

                <p className="font-bold text-inherit text-white">SPOTLIGHT TALENT SHOW</p>
            </NavbarBrand>
            <NavbarContent className="sm:hidden flex lg:flex gap-32 text-4xl text-white" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="AboutUs" aria-current="page">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="Vote">
                        Vote
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">

                <NavbarItem>
                    <Button as={Link} color="primary" href="Register" variant="flat">
                        Register
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default NavBar