import { PortFolioNavbar } from "../Navbar/Navbar"

const Layout = ({children}:any) => {
    return(
        <>
            <PortFolioNavbar/>
            {children}
        </>
        
    )
}
export default Layout