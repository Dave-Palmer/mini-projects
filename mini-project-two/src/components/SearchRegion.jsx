import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RegionContext } from "../context/RegionContext"
import { CragsDataContext } from "../context/CragsDataContext"
import FirstLetterUpperCase from "./FirstLetterUpperCase"
import useToggle from "../hooks/useToggle"
import { Typography, TextField, Button } from "@mui/material"


function SearchRegion() {
    const regionContext = useContext(RegionContext)
    const cragsDataContext = useContext(CragsDataContext)
    const navigate = useNavigate()
    const [crags, setCrags] = useState('')
    const [region, setRegion] = useState()
    const [toggle, setToggle] = useToggle()

    useEffect(() => {
        fetch('cragsData.json')
            .then(response => response.json())
            .then(cragsData => {
                setCrags(cragsData)
            })
    }, [])

    const handleGo = () => {
        if (!region) { return }
        if (crags.find(crag => crag.region == region.toLowerCase()) == undefined) { setToggle() }
        else {
            let matchingCrags = crags.filter(crag => crag.region === region.toLowerCase())
            regionContext.setRegion(<FirstLetterUpperCase word={region} />)
            cragsDataContext.setCragsData(matchingCrags)
            navigate('/town')
        }
    }

    return (
        <>
            <Typography variant="h2">Climbing in NZ</Typography>
            <TextField
                onChange={(e) => { setRegion(e.target.value); toggle && setToggle() }}
                id="outlined-search"
                label="Search region"
                type="search" />

            <Typography variant="h6">{toggle ? region + ' not found!' : ''}</Typography>
            <Button
                sx={{ backgroundColor: "white", mt: '10px', borderRadius: '20px' }}
                className="go-button"
                onClick={() => { handleGo() }}>
                Go
            </Button>
        </>
    )
}

export default SearchRegion