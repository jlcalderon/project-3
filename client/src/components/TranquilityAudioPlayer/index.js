import React from "react";
import ReactAudioPlayer from "react-audio-player";
import soundFile from "./01_Tranquility_Calm_(Pad).mp3";

function TranquilityAudioPlayer() {

    return (
            <div className='container' style={{padding:"15px"}}>
            <div className='row h-100' style={{marginTop:"5%"}}>
                <div className='col-md-4 offset-md-4 my-auto'>
                    <div className='card'>
                        <img
                            src='https://picsum.photos/300/300'
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
            </div>
            </div>
    );
}

export default TranquilityAudioPlayer;