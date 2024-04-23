import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {routes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
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