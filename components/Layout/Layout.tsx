import { PortFolioNavbar } from "../Navbar/Navbar"

const Layout = ({children}) => {
    return(
        <>
            <PortFolioNavbar/>
            {children}
        </>
        
    )
}
export default Layout