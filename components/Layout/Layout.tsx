import { PortFolioNavbar } from "../Navbar/Navbar"

const Layout = ({children,setMode}:any) => {
    return(
        <>
            <PortFolioNavbar setMode={setMode}/>
            {children}
        </>
        
    )
}
export default Layout