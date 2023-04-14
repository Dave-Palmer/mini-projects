import { CragsDataContext } from "../context/CragsDataContext";
import { RegionContext } from "../context/RegionContext";
import { LocalContext } from "../context/LocalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function BackToSearch() {
    const { setCragsData } = useContext(CragsDataContext)
    const { setRegion } = useContext(RegionContext)
    const { setLocal } = useContext(LocalContext)
    const navigate = useNavigate()

    function reset() {
        setCragsData([])
        setRegion('')
        setLocal('')
        navigate('/')

    }

    return (
        <Button onClick={() => reset()}>Back to Search</Button>
    )
}

export default BackToSearch