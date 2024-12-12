    import React, { useState } from "react";
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


const SettingsMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSettings = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="menu-item">
        <button className="menu-button" onClick={toggleSettings}>
          Настройки
        </button>
        <div className={`settings-content ${isOpen ? "open" : ""}`}>
          <button className="submenu-button">Язык</button>
          <button className="submenu-button">Сменить тему</button>
        </div>
      </div>
    );
  };

export default RightMenu;