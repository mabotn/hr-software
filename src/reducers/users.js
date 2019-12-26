import UsersServices from '../services/users';

export const usersReducers = (state = [], action) => {
    switch (action.type) {
        case 'FILL_USERS':
            return action.newData
        case 'ADD_USER':
            UsersServices.addUser(action.newData)
            return [...state, action.newData]
        case 'EDIT_USER':
            UsersServices.editUser(action.userId, action.newData)
            return state.map(u => u.id === action.userId ? action.newData : u)
        case 'DELETE_USER':
            UsersServices.deleteUser(action.userId)
            return state.filter(u => u.id !== action.userId)
        default:
            return state
    }
}