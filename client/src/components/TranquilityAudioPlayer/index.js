import React from "react";
import ReactAudioPlayer from "react-audio-player";
// Audio Files
import soundFile from "./01_Tranquility_Calm_(Pad).mp3";
import soundMorning from "./02_Good_Morning_(Pad).mp3"
import soundFocus from "./03_Focus_Pt_1_(Voice_Only).mp3"
import soundAnxiety from "./06_Anxiety_Relief_(Beach_Waves).mp3"
import soundSleep from "./04_Restful_Sleep.mp3"
import soundletGo from "./05_Letting_Go_Meditation_(Alpha).mp3"
// Images
import Relax from './Relax.png'
import Positive from './Positive.png'
import Focus from './Focus.png'
import Anxiety from './Anxiety.png'
import Sleep from './Sleep.png'
import lettingGo from './lettinggo.png'




function TranquilityAudioPlayer() {

    return (
        <div>
            <div className="container">
                <div> 
                    <div className="row">
                        <div className='col'>
                            <div className='card-calm'>
                                <h1>Calm</h1>
                                <img
                                src={Relax}
                                    alt='Mindset'
                                    width={70}
                                    className='card-img-top'
                                    style={{borderRadius:"90%"}}
                                />      
                        <div className='card-body'>
                            <ReactAudioPlayer src={soundFile} controls />
                        </div>
                    </div>
                    </div>
                        <div className='col'>
                            <div className='card-morning'>
                            <h1>Good Morning</h1>
                                 <img
                                   src={Positive}
                                    alt='Mindset'
                                    width={70}
                                    className='card-img-top'
                                    style={{borderRadius:"90%"}}
                                />
                        <div className='card-body'>
                            <ReactAudioPlayer src={soundMorning} controls />
                        </div>
                    </div>
                        </div>
                        <div className='col'>
                        <div className='card-focus'>
                        <h1>Focus</h1>
                            <img  
                                src={Focus}
                                alt='Mindset'
                                width={70}
                                className='card-img-top'
                                style={{borderRadius:"90%"}}
                            />
                        <div className='card-body'>
                            <ReactAudioPlayer src={soundFocus} controls />
                        </div>
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
                        <img
                            src={Anxiety}
                            alt='Mindset'
                            width={70}
                            className='card-img-top'
                            style={{borderRadius:"90%"}}
                        />
                        <div className='card-body'>
                            <ReactAudioPlayer src={soundAnxiety} controls />
                        </div>
                    </div>
                        </div>
                        <div className='col'>
                        <div className='card-sleep'>
                        <h1>Restful Sleep</h1>
                        <img 
                           src={Sleep}
                            alt='Mindset'
                            width={70}
                            className='card-img-top'
                            style={{borderRadius:"90%"}}
                        />
                        <div className='card-body'>
                            <ReactAudioPlayer src={soundSleep} controls />
                        </div>
                    </div>
                        </div>
                        <div className='col'>
                        <div className='card-letgo'>
                        <h1>Letting Go</h1>
                        <img
                            src={lettingGo}
                            alt='Mindset'
                            width={70}
                            className='card-img-top'
                            style={{borderRadius:"90%"}}
                        />
                        <div className='card-body'>
                            <ReactAudioPlayer src={soundletGo} controls />
                        </div>
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








