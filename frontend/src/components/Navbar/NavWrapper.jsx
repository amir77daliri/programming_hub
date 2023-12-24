import { cloneElement } from 'react'
import { useScrollTrigger } from '@mui/material'
import ResponsiveAppBar from "./Appbar.jsx";


const NavWrapper = () => {
    function ElevationScroll({children}) {
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 5
        })
        return cloneElement(children, {
            elevation: trigger ? 4 : 0
        })
    }

    return (
        <>
            <ElevationScroll>
                <ResponsiveAppBar />
            </ElevationScroll>
        </>
    )
}

export default NavWrapper;