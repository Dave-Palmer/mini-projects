import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CragsDataContext } from "../context/CragsDataContext"
import SignInSide from "./SignInSide";



function CragDetails() {
    const { id } = useParams()
    const { cragsData } = useContext(CragsDataContext)
    // const navigate = useNavigate()

    const singleCrag = cragsData.find(crag => crag.id == parseInt(id))
    // const singleCrag = crags.find(crag => parseInt(id) === crag.id)
    return (
        <>
            {/* <Crag {...singleCrag} />
            <Button onClick={() => navigate('/crags')}>Back to all crags</Button> */}
            <SignInSide {...singleCrag} />
        </>
    )
}

export default CragDetails

