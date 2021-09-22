import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// utilities routing
const UserList = Loadable(lazy(() => import('views/user')));
// sample page routing

// ===========================|| USER ROUTING ||=========================== //

const UserRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/user',
            element: <UserList />
        }
    ]
};

export default UserRoutes;
