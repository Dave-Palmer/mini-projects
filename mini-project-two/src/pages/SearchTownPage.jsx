import SearchTown from "../components/SeachTown";
import { RegionContext } from "../context/RegionContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

function SearchTownPage() {
    const regionContext = useContext(RegionContext)

    return (
        regionContext.region === '' ? <Navigate to="/" /> :
            <SearchTown />
    )
}

export default SearchTownPage