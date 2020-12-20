import React from "react";
import ReactAudioPlayer from "react-audio-player";
import soundAnxiety from "./06_Anxiety_Relief_(Beach_Waves).mp3"
import Anxietyimg from './Anxiety.png'




function Anxiety() {
    return (
            <div className='container' style={{padding:"15px"}}>
            <div className='row h-100' style={{marginTop:"5%"}}>
                <div className='col-md-4 offset-md-4 my-auto'>
                    <div className='card'>
                        <img
                            src={Anxietyimg}
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
            </div>
            </div>
    );
}

export default Anxiety;








