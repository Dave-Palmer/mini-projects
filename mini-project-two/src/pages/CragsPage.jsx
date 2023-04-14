
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { LocalContext } from "../context/LocalContext";
import { RegionContext } from "../context/RegionContext";
import { Navigate } from "react-router-dom";
import { Typography } from "@mui/material";

function CragsPage() {
    const regionContext = useContext(RegionContext)
    const { local } = useContext(LocalContext)
    // if (CragsDataContext.cragsData === '') { navigate("/") }

    return (
        regionContext.region === '' ? <Navigate to="/" /> :
            <>
                <Typography variant="h3">Climbing in {local}</Typography>
                <Outlet />
            </>
    )
}

export default CragsPage