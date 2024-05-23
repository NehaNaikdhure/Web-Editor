import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { routes } from './routes'
import Home from '../pages/Home'
import EditorPage from '../pages/HTMLEditor'

function Router() {
    return (
        <Routes>
            <Route path={routes.ROOT} element={<EditorPage />} />
            <Route path={routes.NOTFOUND} element={<div>Not Found</div>} />
            <Route path={routes.WILDCARD} element={<Navigate to={routes.NOTFOUND} replace={true} />} />
        </Routes>
    )
}

export default Router