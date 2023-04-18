import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { products } from './../../datas'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


// this is a component about userList
//we use table from mui.com
export default function Products() {

    const [productsData, setProductsData] = useState(products)

    const productsDelete = (productId) => {
        return setProductsData(productsData.filter(product => product.id !== productId))
    }

    const colums = [
        {
            field: 'id',
            headerName: 'Id',
            width: 90,
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 230,
            renderCell: (params) => {
                console.log(params);
                return (
                    <>
                        <Link to='/' className='link'>
                            <div className='userListUser'>
                                <img src={params.row.avatar} className='userListImg' alt='' />
                                {params.row.title}
                            </div>
                        </Link>
                    </>
                )
            }
        },
        {
            field: 'price',
            headerName: 'Price',
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
                        <Link to={`/product/${params.row.id}`} className='link'>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                            className='userListDelete'
                            onClick={() => productsDelete(params.row.id)} />
                    </>
                )
            }
        },
    ]


    return (
        <div className='userList'>
            <DataGrid
                rows={productsData}
                columns={colums}
                pageSize={3}
                disableSelectionOnClick
            />
        </div>
    )
}
