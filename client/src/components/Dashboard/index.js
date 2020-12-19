import React, { useState, useEffect } from "react";
import GoogleChart from "../GoogleChart";
import axios from "axios";

function Dashboard() {
    const [user, setUser] = useState({});
    const [studentsData, setStudentsData] = useState([]);

    useEffect(() => {
        const userFormatted = JSON.parse(localStorage.getItem("user"));
        setUser(userFormatted);

        axios.get("/api/user/student/school/"+parseInt(JSON.parse(localStorage.getItem("user")).schoolId,10))
        .then((results)=>{
          setStudentsData(results.data);
        }).catch(err => {
          console.log(err);
        });

    }, []);



    console.log(studentsData);

    return (
        <div className='container' style={{ marginTop: "20px" }}>
            {user.admin === true ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h3>Wellcome {user.userName}</h3>
                        </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <ul className="list-group">
                        {studentsData.map((item)=>{
                          return (<li 
                                    className="list-group-item"
                                    id={item.id}
                                    onClick={(event)=>{console.log(event.target.id)}}
                                    style={{display:"inline-block"}}
                                    >
                                    <p>Name: {item.userName} | Status: {item.status === false ? (<p>Offline</p>) : (<p>Online</p>)} | Scores: {item.scores}</p> 
                                    <button>Do Something</button>
                                  </li>);
                        })
                        }
                        </ul>
                      </div>
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h3>{user.userName}'s Dashboard</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <p>Here are your daily mood tracker statistics</p>
                            {/** Here we got to send the data and setings as props*/}
                            <GoogleChart />
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}></div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
