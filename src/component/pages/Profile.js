import React from "react";
import "../css/Profile.css"
import { useUser } from "../../api/context/UserProfile";

const Profile = () => {
    const { user } = useUser();

    return (
        <>
        {/* {user ? ( */}
            <div className="profile-main-panel">
                <div className="profile-user-panel">
                    <div className="profile-user-pic"></div>
                    {/* <h4>{user.username}</h4>
                    <h5>{user.id}</h5> */}
                    <h4>user.username</h4>
                    <h5>user.id</h5>
                </div>
                <div className="profile-button">
                    <h3>Achievements</h3>
                </div>
                <div className="profile-button">
                    <h3>Edit Profile</h3>
                </div>
                <div className="profile-button">
                    <h3>Request for Transcript</h3>
                </div>
                <div className="profile-button">
                    <h3>Log Out</h3>
                </div>
            </div>
        {/* ) : (
                <h1></h1>
            )} */}
            
        </>
    )
}

export default Profile;