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
        <div className="investigations-page">
        <Header />
            <div className="main-container">
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Investigations;