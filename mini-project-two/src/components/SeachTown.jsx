
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RegionContext } from "../context/RegionContext"
import { LocalContext } from "../context/LocalContext"
import { CragsDataContext } from "../context/CragsDataContext"
import { Typography, TextField, Button } from "@mui/material"
import FirstLetterUpperCase from "./FirstLetterUpperCase"
import useToggle from "../hooks/useToggle"


function SearchTown() {

    const navigate = useNavigate()
    const regionContext = useContext(RegionContext)
    const localContext = useContext(LocalContext)
    const { cragsData, setCragsData } = useContext(CragsDataContext)
    const [toggle, setToggle] = useToggle()
    const [town, setTown] = useState()

    const handleGo = () => {
        if (!town) { return }
        if (cragsData.find(crag => crag.town == town.toLowerCase()) == undefined) { setToggle() }
        else {
            let matchingCrags = cragsData.filter(crag => crag.town === town.toLowerCase())
            console.log("matching crags" + matchingCrags)
            localContext.setLocal(<FirstLetterUpperCase word={town} />)
            console.log(localContext.local)
            setCragsData(matchingCrags)
            navigate('/crags')
        }
    }


    return (
        <div className="search-pages">

            <Typography variant="h2">Which town in {regionContext.region}</Typography>
            <TextField
                onChange={(e) => { setTown(e.target.value); toggle && setToggle() }}
                id="outlined-search"
                label="Search Town"
                type="search" />

            <Typography variant="h6">{toggle ? town + " doesn't have any crags" : ''}</Typography>
            <Button
                sx={{ backgroundColor: "white", mt: '10px', borderRadius: '20px' }}
                className="go-button"
                onClick={() => { handleGo() }}>
                Go
            </Button>

        </div>

    )
}

export default SearchTown