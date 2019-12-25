import Axios from "axios"

let addUser = (user) => {
    Axios.post('http://localhost:3000/users', user)
        .then((res) => {
            console.log(res)
        })
        .catch(err => { console.log(err) })
}
let deleteUser = (id) => {
    Axios.delete('http://localhost:3000/users/' + id)
        .then((res) => {
            console.log(res)
        })
        .catch(err => { console.log(err) })
}
let editUser = (id, newData) => {
    Axios.put('http://localhost:3000/users/' + id, newData)
        .then((res) => {
            console.log(res)
        })
        .catch(err => { console.log(err) })
}

export default {
    addUser, deleteUser, editUser
}
