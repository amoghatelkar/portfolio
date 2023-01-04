import { FC, useState } from "react";
import { Button, Link, Navbar, Text, useTheme } from '@nextui-org/react';
import React from "react";
import { ATLogo } from "../../utils/at";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setActive, setTheme } from "../../store/uiSlice";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";


export const PortFolioNavbar:FC<{setMode:any}> = ({setMode}) => {

    const {isDark} = useTheme();
    const router = useRouter();
    const dispatch = useDispatch();
    const { active, theme } = useSelector((state:RootState) => state.ui);
    const [navbarItems,setNavbarItems] = useState([
        { key:'home',name:'Home',link:'/'},
        { key:'resume',name:'Resume',link:'/resume'},
        { key:'repository', name:'Repository',link:'/repository'},
        // { name:'Exprience',link:'/experience'},
        // { name:'Education',link:'/education'},
         { key:'contact', name:'Contact',link:'/contact'},
    ]);

    const onNavbarClick = (index:number) => {
        dispatch(setActive(index));
        router.push(navbarItems[index].link);
    }
    return (
        <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" />
          <ATLogo />
          <Text b color="inherit" hideIn="xs">
            AMOGH TELKAR
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={"primary"} enableCursorHighlight hideIn="xs" variant={"highlight"}>
            {navbarItems.map((navbarItem,index) => (
                <Navbar.Link onClick={() => onNavbarClick(index)} isActive={active === index} key={navbarItem.key} >{navbarItem.name}</Navbar.Link>
            ))}
        </Navbar.Content>
        <Navbar.Content>
            
          <Navbar.Item>
            <Button auto flat as={Link} color={"primary"} onClick={() => theme === 'light' ? dispatch(setTheme('dark')) : dispatch(setTheme('light')) }>
                {theme === "light" ? <MdOutlineDarkMode/> : <MdOutlineLightMode/> }
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
        {navbarItems.map((navbarItem, index) => (
          <Navbar.CollapseItem key={`${index} ${navbarItem.key}`}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={navbarItem.link}
            >
              {navbarItem.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
    );
}