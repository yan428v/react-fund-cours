import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        element={<route.component />}
                        path={route.path}
                    />
                )}
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    element={<route.component />}
                    path={route.path}
                />
            )}
            <Route path="*" element={<Navigate to="/posts" replace />} />
        </Routes>
    );
};

export default AppRouter;