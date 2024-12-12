import React, { useState } from "react";
import "../css/RightMenu.css"
import { useTranslation } from "react-i18next";
import { useUser } from "../../api/context/UserProfile";
import "../css/Materials.css"


const RightMenu = () => {
  const { user } = useUser();
  const [showMat, setShowMat] = useState(false);
  const { t } = useTranslation();

  const handleMatClick = () => {
    setShowMat((prev) => !prev);
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
        <div className="right-menu-panel1">
          <h2>{t("menu.pre")}</h2>
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
        <>
          <div key="materials" className="materials-main-panel">
            <div className="materials-top-title">
              <h1>Used Materials</h1>
            </div>
            <hr></hr>
            <div className="krestik1">
              <h1 onClick={handleMatClick}>x</h1>
            </div>
            <div className="materials-top">
              <h2>Objection #1 Cleaning the Spot</h2>
              <div className="materials-info">
                <h3>In this objection we talk about the cleaning some kind of spotts that located near lakes or ozers. I dont give a info about everything that happens beetwen this neck and what to drink some kind of drink while working on the laptop. In this objection we talk about the cleaning some kind of spotts that located near lakes or ozers. I dont give a info about everything that happens beetwen this neck and what to drink some kind of drink while working on the laptop. In this objection we talk about the cleaning some kind of spotts that located near lakes or ozers. I dont give a info about everything that happens beetwen this neck and what to drink some kind of drink while working on the laptop. In this objection we talk about the cleaning some kind of spotts that located near lakes or ozers. I dont give a info about everything that happens beetwen this neck and what to drink some kind of drink while working on the laptop. </h3>
              </div>
              <div className="materials-img">
                <img
                  src={require(`../img/UsedMaterials1.png`)}
                  alt="The young nigga"
                  className="image"
                />
              </div>
            </div>
          </div>
        </>
      )}

    </>
  )
};



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