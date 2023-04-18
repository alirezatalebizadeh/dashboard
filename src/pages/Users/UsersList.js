import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from './../../datas'
import './UsersList.css'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './UsersList.css'


// this is a component about userList
//we use table from mui.com
export default function UsersList() {

    const [userDatas, setUserDatas] = useState(userRows)

    const userDelete = (userId) => {
        return setUserDatas(userDatas.filter(user => user.id !== userId))
    }

    const colums = [
        {
            field: 'id',
            headerName: 'Id',
            width: 90,
        },
        {
            field: 'userName',
            headerName: 'User',
            width: 230,
            renderCell: (params) => {
                console.log(params);
                return (
                    <>
                        <Link to='/' className='link'>
                            <div className='userListUser'>
                                <img src={params.row.avatar} className='userListImg' alt='' />
                                {params.row.username}
                            </div>
                        </Link>
                    </>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,

        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transActions',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            // params is data of cells
            renderCell: params => {
                return (
                    <>
                        <Link to={`/users/${params.row.id}`} className='link'>
                            <button className='userListEdit'>Edit </button>
                        </Link>
                        <DeleteOutlineIcon
                            className='userListDelete'
                            onClick={() => userDelete(params.row.id)} />
                    </>
                )
            }
        },
    ]


    return (
        <div className='userList'>
            <DataGrid
                rows={userDatas}
                columns={colums}
                pageSize={2}
                disableSelectionOnClick
                pageSizeOptions={[5]}
            />
        </div>
    )
}
