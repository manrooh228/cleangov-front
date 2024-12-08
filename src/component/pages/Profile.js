import React from "react";
import "../css/Profile.css"
import { useUser } from "../../api/context/UserProfile";

const Profile = () => {
    const { user } = useUser();
    console.log(user);
    return (
        <>
        {/* {user ? ( */}
            <div className="profile-main-panel">
                <div className="profile-user-panel">
                    <div className="profile-user-pic"><i className='bx bxs-user-circle'></i></div>
                    <div className="progile-user-info">
                        <h2>{user.username}</h2>
                        <h3>{user.name} {user.surname}</h3>
                    </div>
                    {/* <h4>user.username</h4>
                    <h5>user.id</h5> */}
                </div>
                <div className="profile-button">
                    <h2>Achievements</h2>
                </div>
                <div className="profile-button">
                    <h2>Edit Profile</h2>
                </div>
                <div className="profile-button">
                    <h2>Request for Transcript</h2>
                </div>
                <div className="profile-button">
                    <h2>Log Out</h2>
                </div>
            </div>
        {/* ) : (
                <h1></h1>
            )} */}
            
        </>
    )
}

export default Profile;