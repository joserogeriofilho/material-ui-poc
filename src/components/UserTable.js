import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export function UserTable(props) {
    if ( props.isLoading ){
        return ( <span>Loading...</span> );
    }
    
    if ( props.error ) {
        return (
            <div>
                <span>An error ocurred:</span>
                <p>{props.error.toString()}</p>
            </div>
        );
    }
    
    else {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Last Name</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>E-mail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map(user => (
                    <TableRow key={user.id}>
                        <TableCell component="th" scope="row">
                        {user.lastName}
                        </TableCell>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.userName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        );        
    }
}