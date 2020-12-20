import React from "react";
import ReactAudioPlayer from "react-audio-player";
import soundMorning from "./02_Good_Morning_(Pad).mp3"
import Positive from './Positive.png'




function Morning() {

    return (
        <div>
           <div className='container' style={{padding:"15px"}}>
            <div className='row h-100' style={{marginTop:"5%"}}>
                <div className='col-md-4 offset-md-4 my-auto'>
                    <div className='card'>
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
            </div>
            </div>
      </div>
    
    );
}

export default Morning;








