import React from "react";
import "../css/Profile.css"
import { useUser } from "../../api/context/UserProfile";
import { useTranslation } from "react-i18next";

const Profile = () => {
    const { user } = useUser();
    const {t} = useTranslation();
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
                    <h2>{t("investigation-list.achivements")}</h2>
                </div>
                <div className="profile-button">
                    <h2>{t("profile.edit")}</h2>
                </div>
                <div className="profile-button">
                    <h2>{t("profile.req")}</h2>
                </div>
                <div className="profile-button">
                    <h2>{t("profile.log-out")}</h2>
                </div>
            </div>
        {/* ) : (
                <h1></h1>
            )} */}
            
        </>
    )
}

export default Profile;