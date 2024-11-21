import React, {useState, useEffect} from "react";
import Header from "../Header";
import "../../css/Tutorial/TutorialMain.css"

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
    const isMobile = useIsMobile();

    return (
        <>
            <Header />
            <div className="tutorial-main-page">
                <div className="tutorial-panel">
                    <div className="panel-name">
                        <h2>Start Tutorial</h2>
                    </div>
                    <div className="description-panel">
                        <div className="panel-title">
                            <h5>Start Tutorial</h5>
                        </div>
                        <div className="panel-info">
                            <h5>In this tutorial, you will learn how the interface works, figure out what affects it and how. And get some tips that will definitely help you when completing the game course</h5>    
                        </div>
                    </div>
                    <button className="inv-start"><p>START</p></button>
                </div>
                {isMobile ? (
                    <div className="additional-panel">
                        {/* <div className="panel-title">
                            <h3>Start Tutorial</h3>
                        </div> */}
                </div>
                ) : (
                    <div className="additional-panel">
                        <div className="panel-name">
                            <div className="panel-title">
                                <h2>Additional information</h2>
                            </div>
                        </div>
                        <div className="AboutUs-panel">
                            <h2>About Us</h2>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                        <div className="UsedMaterials-panel">
                            <h2>Used materials</h2>
                            <i class='bx bx-chevron-right'></i>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default TutorialMain;