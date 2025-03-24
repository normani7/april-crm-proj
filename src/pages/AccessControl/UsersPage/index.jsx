import {useEffect, useState} from "react";

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dialog} from 'primereact/dialog';

import {UsersService} from "../../../entities/users/index.js";

export default function UsersPage() {
    const {getUsers} = UsersService()

    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null);
    const [isShowUserDetails, setIsShowUserDetails] = useState(false);

    const fetchUsers = async () => {
        const arr = await getUsers()
        setUsers([...arr])
    }

    const onSelectionChange = (evt) => {
        setSelectedUser(evt.value)
        setIsShowUserDetails(true)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <DataTable
                value={users}
                selectionMode="single"
                selection={selectedUser}
                onSelectionChange={onSelectionChange}
            >
                <Column field="id" header="User Id"></Column>
                <Column field="username" header="User name"></Column>
                <Column field="name" header="Full name"></Column>
                <Column field="phone" header="User phone"></Column>
                <Column field="email" header="User email"></Column>
            </DataTable>

            <Dialog
                visible={isShowUserDetails}
                onHide={() => setIsShowUserDetails(false)}
            >
                {JSON.stringify(selectedUser)}
            </Dialog>
        </>
    )
}