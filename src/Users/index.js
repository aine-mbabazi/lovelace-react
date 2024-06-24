
import{useGetUsers} from "./hooks/useGetUsers"
import UserCard from "../Atoms/UserCard";
import './index.css'


const Users = () => {
    

    const {users,loading,error} = useGetUsers();
    console.log('user...',users);
    return(
        <div className="image">
         { loading && <h2>Loading users...</h2>}
         {users.length > 0 && !loading?(users.map(user=>(
            <UserCard 
            image = {user.image}
            fullName = {`${user.firstName} ${user.lastName}`}
            key = {user.id}
            />
        ))
    ) : (
        !loading && <h2>No users found</h2>
    )} 
    {error.length>0 && <h2> Error:{error}</h2>}
        </div>
    );
}
export default Users;