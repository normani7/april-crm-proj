import { Children } from "react";
import SettingsPage from "../../../pages/AccessControl/SettingsPage";
import UsersPage from './../../../pages/AccessControl/UsersPage/index';

export default [
    {
        path: '/users',
        element: <UsersPage />,
    },
    {
        path: '/settings',
        element: <SettingsPage />,
    }
]