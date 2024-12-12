import React, {useState, useEffect} from "react";
import Header from "../Header";
import "../../css/Tutorial/TutorialMain.css"
import { useTranslation } from "react-i18next";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobile; 
  };

const TutorialMain = () => {
    const { t } = useTranslation();
    const isMobile = useIsMobile();

    return (
        <>
            <Header />
            <div className="tutorial-main-page">
                <div className="tutorial-panel">
                    <div className="panel-name">
                        <h2>{t('tutorial.start-tutorial')}</h2>
                    </div>
                    <div className="description-panel">
                        <div className="panel-title">
                            <h5>{t('tutorial.start-tutorial')}</h5>
                        </div>
                        <div className="panel-info">
                            <h5>{t('tutorial.info-tutorial')}</h5>    
                        </div>
                    </div>
                    <button className="inv-start"><p>{t('buttons.start')}</p></button>
                </div>
                {isMobile ? (
                    <div className="mobile-panel">
                        <div className="elements">
                            <div className = "AboutUs">
                                <i class='bx bxs-chip'></i>
                                <h5>{t('menu.about')}</h5>
                            </div>
                            <div className = "UsedMat">
                                <i class='bx bxs-pin' ></i>
                                <h5>{t('menu.use')}</h5>
                            </div>
                        </div>
                    </div>
                    // mobile version
                ) : (
                    <div className="additional-panel">
                        <div className="panel-name">
                            <div className="panel-title">
                                <h2>{t('tutorial.additional')}</h2>
                            </div>  
                        </div>
                        <div className="AboutUs-panel">
                            <h2>{t('menu.about')}</h2>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                        <div className="UsedMaterials-panel">
                            <h2>{t('menu.use')}</h2>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default TutorialMain;