import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CragsDataContext } from "../context/CragsDataContext"
import CragInfo from "./CragInfo";



function CragDetails() {
    const { id } = useParams()
    const { cragsData } = useContext(CragsDataContext)

    const singleCrag = cragsData.find(crag => crag.id == parseInt(id))
    return (
        <>
            <CragInfo {...singleCrag} />
        </>
    )
}

export default CragDetails

