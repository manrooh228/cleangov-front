import React, { useState } from "react";
import "../css/RightMenu.css"
import { useTranslation } from "react-i18next";
import { useUser } from "../../api/context/UserProfile";
import "../css/Materials.css";
import "../css/Preferences.css";


const RightMenu = () => {
    const { user } = useUser();
    const [showMat, setShowMat] = useState(false);
    const {t, i18n} = useTranslation();
    const [showPreferences, setShowPreferences] = useState(false);
    const [showLanguage, setshowLanguage] = useState(false);

    const currentLanguage = i18n.language;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    const handleMatClick = () => {
        setShowMat((prev) => !prev);
    }
    const handleLangClick = () => {
        setshowLanguage((prev) => !prev);
    }
    const handlePreferencesClick = () => {
        setShowPreferences((prev) => !prev);
    }
    
    return (
      <>
      <div className="right-menu-main">
      <div className="right-menu-head">
        <h1>CleanGOV</h1>
      </div>
      <div className="right-menu-panel">
          <h2>{t("menu.sel")}</h2>
      </div>
      <div className="right-menu-panel1"
      onMouseEnter={handlePreferencesClick}
      onMouseLeave={handlePreferencesClick}>
          <h2>{t("menu.pre")}</h2>
            {showPreferences && (
                <div className="preference-panel-language">
                    <div className="preference-name-language">
                        <h2>Language</h2>
                    </div>
                    <div className="preference-language">
                        <div className="pref-panel">
                            {currentLanguage === 'en' ? (
                            <>
                                <button onMouseEnter={handleLangClick}
                                        onMouseLeave={handleLangClick}
                                        onClick={changeLanguage('en')}>
                                    <p>EN</p>
                                </button>
                                {showLanguage && (
                                    <>
                                    <button>
                                        <p>KZ</p>
                                    </button>
                                    <button>
                                        <p>RU</p>
                                    </button> 
                                    </>
                                )}
                                
                            </>
                            ) :
                            currentLanguage === 'kz' ? (
                                <>
                                    <button onMouseEnter={handleLangClick}
                                            onMouseLeave={handleLangClick}>
                                    <p>KZ</p>
                                    </button>
                                    {showLanguage && (
                                        <>
                                        <button>
                                            <p>EN</p>
                                        </button>
                                        <button>
                                            <p>RU</p>
                                        </button> 
                                        </>
                                    )}
                                </>
                            ) : 
                            currentLanguage === 'ru' ? (
                                <>
                                    <button onMouseEnter={handleLangClick}
                                            onMouseLeave={handleLangClick}>
                                    <p>RU</p>
                                    </button>
                                    {showLanguage && (
                                        <>
                                        <button>
                                            <p>EN</p>
                                        </button>
                                        <button>
                                            <p>KZ</p>
                                        </button> 
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
      </div>
      <div className="right-menu-panel">
          <h2>{t("menu.rep")}</h2>
      </div>
      <div className="right-menu-panel" onClick={handleMatClick}>
          <h2>{t("menu.use")}</h2>
      </div>  
      <div className="right-menu-panel">
          <h2>{t("menu.about")}</h2>
      </div>
  </div>
  
    {showMat && (
    <div key="materials" className="materials-main-panel">
        <h1>Materials</h1>
    </div>
    )}

  </>
    )};
  


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