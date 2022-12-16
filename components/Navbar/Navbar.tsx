import { FC } from "react";
import { Button, Card, Link, Navbar, Radio, Text } from '@nextui-org/react';
import React from "react";
import type { NextPage } from 'next'
export const PortFolioNavbar:FC = () => {
    const [variant, setVariant] = React.useState("static");

    const variants = ["static", "floating", "sticky"];
    const navbarItems = [
        { key:'home',name:'Home',link:'/'},
        { key:'resume',name:'Resume',link:'https://www.cakeresume.com/s--3MAijQXyxXWDS3JAnvlXBQ--/amogh-telkar'},
        // { name:'Repository',link:'/repository'},
        // { name:'Exprience',link:'/experience'},
        // { name:'Education',link:'/education'},
        // { name:'Contact',link:'/contact'},
    ]
    return (
        // <Navbar isBordered variant={"sticky"}>
        //     <Navbar.Brand>
        //         {/* <AcmeLogo /> */}
        //         <Text b color="inherit" hideIn="xs">
        //             AMOGH TELKAR
        //         </Text>
        //     </Navbar.Brand>
        //     <Navbar.Content hideIn="xs">
        //         <Navbar.Link href="/#">Home</Navbar.Link>
        //         <Navbar.Link href="/resume">Resume</Navbar.Link>
        //         <Navbar.Link href="/repository">Repository</Navbar.Link>
        //         <Navbar.Link href="/experience">Experience</Navbar.Link>
        //         <Navbar.Link href="/education">Education</Navbar.Link>
        //         <Navbar.Link href="/contact">Contact</Navbar.Link>
        //     </Navbar.Content>
        //     {/* <Navbar.Content>
        //         <Navbar.Link color="inherit" href="#">
        //             Login
        //         </Navbar.Link>
        //         <Navbar.Item>
        //             <Button auto flat as={Link} href="#">
        //                 Sign Up
        //             </Button>
        //         </Navbar.Item>
        //     </Navbar.Content> */}
        // </Navbar>

        <div style={{width:'100%',display:'flex',position:'relative'}}>
            <div>
                <h3 style={{padding:'0 20px'}}>@</h3>
            </div>
            <div style={{marginLeft:'auto',padding:'20px'}}>
                {navbarItems.map(navbarItem => <>
                    <a key={navbarItem.key} style={{padding:'10px'}} href={navbarItem.link}>{navbarItem.name}</a>
                </>
                )}
            </div>
        </div>
        

    );
}