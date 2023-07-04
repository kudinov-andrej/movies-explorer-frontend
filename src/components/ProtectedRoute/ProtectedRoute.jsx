import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
    return (
        props.islogin ? <Component {...props} /> : <Navigate to="/signup" replace />
    )
}

export default ProtectedRoute; 