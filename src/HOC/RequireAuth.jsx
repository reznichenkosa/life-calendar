import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireAuth = (props) => {
    const user = useSelector(state => state.user);

    if (!user.id) {
        return <Navigate to="/login"/>;
    }
    
    return props.children;
};

export default RequireAuth;