import React from "react";

import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div style={{marginTop:"30px" }}>
      <ReactPlayer
        url="https://youtu.be/UVAyIh5V4NY?si=43sXbXhxe7jDBLR_"
        controls={true}
        width="100%"
        height="60vw"
        // playIcon={true}
      />
    </div>


  );
};

export default VideoSection;
