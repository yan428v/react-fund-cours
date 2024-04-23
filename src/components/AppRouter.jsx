import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        element={<route.component/>}
                        path={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/posts" replace/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        element={<route.component/>}
                        path={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/login" replace/>}/>
            </Routes>
    );
};

export default AppRouter;