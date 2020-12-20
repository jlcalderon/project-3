import React from "react";
import ReactAudioPlayer from "react-audio-player";
import soundSleep from "./04_Restful_Sleep.mp3"
import Sleep from './Sleep.png'




function Restful() {

    return (
        <div>
             <div className='container' style={{padding:"15px"}}>
            <div className='row h-100' style={{marginTop:"5%"}}>
                <div className='col-md-4 offset-md-4 my-auto'>
                    <div className='card'>
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
            </div>
            </div>
      </div>
    
    );
}

export default Restful;








