function UserList(props) {
    const {users} = props;
return(
    <div className='users'>
        <h3>Users</h3>
    {users.map(user => {
        return (
            <div className='user' key={user.id}>
                Name: {user.fname} {user.lname} <br/>
                Email: {user.email}<br/>
                ID: {user.id} 
            </div>)
    })}
    </div>
)
}

export default UserList;