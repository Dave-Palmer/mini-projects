import CragCard from "./CragCard"
import { useContext } from "react"
import { CragsDataContext } from "../context/CragsDataContext"
import BackToSearch from "./BackToSearch"




function ClimbingAreaList() {
    const { cragsData, setCragsData } = useContext(CragsDataContext)

    return (
        <div >
            <ul className="climb-area-list">
                {cragsData.map((c) =>
                    <CragCard id={c.id} key={c.id} title={c.title} type={c.type} description={c.description} town={c.town} region={c.region} />
                )}
            </ul>
            <BackToSearch />
        </div>

    )
}

export default ClimbingAreaList

