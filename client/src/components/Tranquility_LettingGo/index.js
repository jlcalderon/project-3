import React from "react";
import ReactAudioPlayer from "react-audio-player";
import soundletGo from "./05_Letting_Go_Meditation_(Alpha).mp3"
import lettingGo from './lettinggo.png'




function LettingGo() {

    return (
        <div className='container' style={{padding:"15px"}}>
            <div className='row h-100' style={{marginTop:"5%"}}>
                <div className='col-md-4 offset-md-4 my-auto'>
                    <div className='card'>
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
            </div>
    
    );
}

export default LettingGo;








