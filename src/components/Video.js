import React from "react";
import 'youtube-video-js';


class Video extends  React.Component{

    render(){
        return(
            <div>
               <script
                type="module"
                src="/node_modules/youtube-video-js/dist/youtube-video.js"
            ></script> 
               <youtube-video
                width="640"
                height="360"
                src="https://www.youtube.com/watch?v=4dm7YKJJ_Cc"
                autoplay
                controls
            />

            </div>
        )
    }



    
}

export default Video;