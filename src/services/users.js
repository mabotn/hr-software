import Axios from "axios"

let addUser = (user) => {
    Axios.post('http://localhost:3000/users', user)
}
let deleteUser = (id) => {
    Axios.delete('http://localhost:3000/users/' + id)
}
let editUser = (id, newData) => {
    Axios.put('http://localhost:3000/users/' + id, newData)
}
let getAllUsers = (setUsers) => {
    Axios.get('http://localhost:3000/users')
        .then((res) => {
            setUsers(res.data)
        })
        .catch(
            (err) => { console.error(err) }
        )
}

export default {
    addUser, deleteUser, editUser, getAllUsers
}
