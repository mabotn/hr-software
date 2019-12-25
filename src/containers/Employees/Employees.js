import React, { useState } from 'react';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { useEffect } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import UsersServices from '../../services/users';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Employee() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [columns] = React.useState([
        { title: 'Firstname', field: 'firstname' },
        { title: 'Lastname', field: 'lastname' },
        { title: 'Email', field: 'email' },
        { title: 'Password', field: 'password', },
        { title: 'Type', field: 'type', },
        { title: 'Supervisor', field: 'supervisor', type: 'boolean' },
    ]);
    useEffect(() => {
        Axios.get('http://localhost:3000/users')
            .then((res) => {
                setUsers(res.data)
            })
            .catch(
                (err) => { console.error(err) }
            )
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div className='intro'>
                            <span>List of all the employees at your company.</span>
                        </div>
                        <br></br>
                        <div className='number_employees'>
                            <PeopleOutlineIcon style={{ fontSize: 70 }} color="primary" className='icon' /><br></br>
                            <span > Number of Employees : <strong>{users.length}</strong></span>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <MaterialTable
                            title="Employees"
                            columns={columns}
                            data={users}
                            editable={{
                                onRowAdd: (newData) =>
                                    new Promise(resolve => {
                                        setTimeout(() => {
                                            resolve();
                                            UsersServices.addUser(newData)
                                        }, 600);
                                    }),
                                onRowUpdate: (newData, oldData) =>
                                    new Promise(resolve => {
                                        setTimeout(() => {
                                            resolve();
                                            UsersServices.editUser(oldData.id, newData)
                                        }, 600);
                                    }),
                                onRowDelete: (oldData) =>
                                    new Promise(resolve => {
                                        setTimeout(() => {
                                            resolve();
                                            UsersServices.deleteUser(oldData.id)
                                        }, 600);
                                    }),
                            }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
}