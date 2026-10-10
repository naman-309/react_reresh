import UserContext from '../context/UserContext'
import { useContext } from 'react'
const Profile = () => {
    let userdata = useContext(UserContext)
    const loginStatus = userdata.Userdata.isLoggedIn ? 'Yes' : 'No'
    console.log(loginStatus)

    return (
        <div>         <hr></hr>

            User Profile
            {loginStatus === 'Yes' ? (
                <p>Welcome, {userdata.Userdata.name}!</p>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    )
}

export default Profile