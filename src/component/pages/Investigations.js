import React from "react";
import "../css/Investigations.css"
import Header from "./Header";

const Investigations = () => {
    //primer
    const invests = [
        {
            id: 1,
            name: 'Investigation in a bank',
            level: 'beginner'
        },
        {
            id: 2,
            name: 'Investigation in a web company',
            level: 'middle'
        },
        {
            id: 3,
            name: 'Investigation in IT-company',
            level: 'professional'
        },
      ];


    return (
        <>
        <Header />
        <div className="investigations-page">
            <div className="main-container">
                <div className="title-container">
                    <h1>CITY I: Corruption</h1>
                    <div className="menu">
                        <button className="menu-inv-list"><p>Investigations list</p></button>
                        <button className="menu-vid-mat"><p>Video materials</p></button>
                        <button className="menu-achiv"><p>Achievements</p></button>
                    </div>
                </div>
                <div className='investigations-list'>
                    {invests.map((invest, index) => (
                        <div key={index} className="row">
                            <div className="investigation-name">
                                <h3>Investigation #{invest.id}</h3>
                                <h3>{invest.name}</h3>  
                            </div>
                            <div className={`investigation-level ${invest.level}`}>
                                    <h5>Level: {invest.level}</h5>
                            </div>
                            <div className="investigation-info-panel">
                                <div className="panel-title">
                                    <h5>About Investigation</h5>
                                </div>
                                <div className="panel-info">
                                    
                                </div>
                            </div>
                            <div className="invesstigation-progress-panel">

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Investigations;