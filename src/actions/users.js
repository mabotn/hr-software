const FILL_USERS = (data) => {
    return {
        type: 'FILL_USERS',
        newData: data
    }
}
const ADD_USER = (newData) => {
    return {
        type: 'ADD_USER',
        newData: newData
    }
}
const EDIT_USER = (newData) => {
    return ({
        type: 'EDIT_USER',
        newData: newData,
        userId: newData.id
    })
}
const DELETE_USER = (oldData) => {
    return ({
        type: 'DELETE_USER',
        userId: oldData.id
    })
}

export default {
    DELETE_USER, FILL_USERS, ADD_USER, EDIT_USER
}