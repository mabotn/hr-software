import React from 'react';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import UsersServices from '../../services/users';
import { useSelector, useDispatch } from 'react-redux';
import usersActions from '../../actions/users'

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

let Employee = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const classes = useStyles();
    const [columns] = React.useState([
        { title: 'Firstname', field: 'firstname' },
        { title: 'Lastname', field: 'lastname' },
        { title: 'Email', field: 'email' },
        { title: 'Password', field: 'password', },
        { title: 'Type', field: 'type', },
        { title: 'Supervisor', field: 'supervisor' },
    ]);
    useEffect(() => {
        UsersServices.getAllUsers((data) => {
            console.log(data)
            dispatch(usersActions.FILL_USERS(data))
        })
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
                                        resolve();
                                        dispatch(usersActions.ADD_USER(newData))
                                    }),
                                onRowUpdate: (newData) =>
                                    new Promise(resolve => {
                                        resolve();
                                        dispatch(usersActions.EDIT_USER(newData))
                                    }),
                                onRowDelete: (oldData) =>
                                    new Promise(resolve => {
                                        resolve();
                                        dispatch(usersActions.DELETE_USER(oldData))
                                    }),
                            }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
}

export default Employee;