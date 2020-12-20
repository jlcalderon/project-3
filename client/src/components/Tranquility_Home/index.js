import React from "react";
import Relax from './Relax.png';
import Positive from './Positive.png';
import Focus from './Focus.png';
import Anxiety from './Anxiety.png';
import Sleep from './Sleep.png';
import lettingGo from './lettinggo.png';
import { Link } from "react-router-dom";
import './index.css';





function TranquilityAudioPlayer() {

    return (
        <div>
            <div className="container">
                <div> 
                    <div className="row">
                        <div className='col'>
                            <div className='card-calm'>
                                <h1>Calm</h1>
                                <Link 
                                to='/tranquility_calm'>

                                <img
                                src={Relax}
                                    alt='Mindset'
                                    width={70}
                                    className='card-img-top'
                                    style={{borderRadius:"90%"}}
                                />  
                                </Link>    
                    </div>
                    </div>
                        <div className='col'>
                            <div className='card-morning'>
                            <h1>Good Morning</h1>
                            <Link 
                                 to='/tranquility_morning'>
                                 <img
                                   src={Positive}
                                    alt='Mindset'
                                    width={70}
                                    className='card-img-top'
                                    style={{borderRadius:"90%"}}
                                />
                                </Link>
                    </div>
                        </div>
                        <div className='col'>
                        <div className='card-focus'>
                        <h1>Focus</h1>
                        <Link 
                            to='/tranquility_focus'>
                            <img  
                                src={Focus}
                                alt='Mindset'
                                width={70}
                                className='card-img-top'
                                style={{borderRadius:"90%"}}
                            />
                            </Link>
                    </div>
                        </div>
                            </div>
                                <div className="row">
                                </div>
                            </div>
                        </div>
                            <div className="container">
                                <div> 
                                <div className="row">
                            <div className='col'>
                            <div className='card-anxiety'>
                            <h1>Anxiety Relief</h1>
                            <Link 
                            to='/tranquility_anxiety'>
                        <img
                            src={Anxiety}
                            alt='Mindset'
                            width={70}
                            className='card-img-top'
                            style={{borderRadius:"90%"}}
                        />
                        </Link>
                    </div>
                        </div>
                        <div className='col'>
                        <div className='card-sleep'>
                        <h1>Restful Sleep</h1>
                        <Link 
                            to='/tranquility_restful'>
                        <img 
                           src={Sleep}
                            alt='Mindset'
                            width={70}
                            className='card-img-top'
                            style={{borderRadius:"90%"}}
                        />
                        </Link>
                    </div>
                        </div>
                        <div className='col'>
                        <div className='card-letgo'>
                        <h1>Letting Go</h1>
                        <Link 
                            to='/tranquility_lettinggo'>
                        <img
                            src={lettingGo}
                            alt='Mindset'
                            width={70}
                            className='card-img-top'
                            style={{borderRadius:"90%"}}
                        />
                        </Link>
                    </div>
                        </div>
                        </div>
                        <div className="row">
            </div>
        </div>
      </div>
      </div>
    
    );
}

export default TranquilityAudioPlayer;








