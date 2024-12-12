import React from "react";
import "../css/RightMenu.css"
import { useTranslation } from "react-i18next";
import { useUser } from "../../api/context/UserProfile";

const RightMenu = () => {
    const { user } = useUser();
    const {t} = useTranslation();
    console.log(user);
    return (
        <>
        <div className="right-menu-main">
            <div className="right-menu-head">
              <h1>CleanGOV</h1>
            </div>
            <div className="right-menu-panel">
                <h2>{t("menu.sel")}</h2>
            </div>
            <div className="right-menu-panel1">
                <h2>{t("menu.pre")}</h2>
            </div>
            <div className="right-menu-panel">
                <h2>{t("menu.rep")}</h2>
            </div>
            <div className="right-menu-panel">
                <h2>{t("menu.use")}</h2>
            </div>  
            <div className="right-menu-panel">
                <h2>{t("menu.about")}</h2>
            </div>
        </div>
        </>
    )
}

export default RightMenu;