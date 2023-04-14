import { Routes, Route, Navigate } from "react-router-dom"
import MainSearchPage from "../pages/MainSearchPage"
import SearchTownPage from "../pages/SearchTownPage"

import CragsPage from "../pages/CragsPage"
import CragDetails from "../components/CragDetails"
import ClimbingAreaList from "../components/CragsList"



function AppRoutes(props) {

    return (
        <Routes>
            <Route exact path="/" element={<MainSearchPage {...props} />} />
            <Route path="/town" element={<SearchTownPage {...props} />} />
            <Route path="/crags" element={<CragsPage {...props} />} >
                <Route index element={<ClimbingAreaList {...props} />} />
                <Route path=":id" element={<CragDetails {...props} />} />
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )

}

export default AppRoutes