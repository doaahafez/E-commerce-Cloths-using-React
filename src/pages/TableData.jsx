import React from 'react'

export default function TableData({data}) {
  return (
    <table className="table table-stripped w-50 mx-5" >
    <thead>
        <tr >
            <th className='text-danger'>#</th>
            <th className='text-danger'>UserName</th>
            <th className='text-danger'>Email</th>
            <th className='text-danger'>Phone</th>
            <th className='text-danger'>Address</th>
        </tr>
    </thead>
    <tbody>
        {data.map((item,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.UserName}</td>
                <td>{item.Email}</td>
                <td>{item.Phone}</td>
                <td>{item.Address}</td>
            </tr>
        )

        )}
    </tbody>
</table>
  )
}
