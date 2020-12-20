import React from "react";
import ReactAudioPlayer from "react-audio-player";
import soundFocus from "./03_Focus_Pt_1_(Voice_Only).mp3"
import Focus from './Focus.png'




function Attention() {

    return (
        <div>
            <div className='container' style={{padding:"15px"}}>
            <div className='row h-100' style={{marginTop:"5%"}}>
                <div className='col-md-4 offset-md-4 my-auto'>
                    <div className='card'>
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
            </div>
      </div>
    
    );
}

export default Attention;








