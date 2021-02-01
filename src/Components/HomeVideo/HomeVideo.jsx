import React from 'react';
// assets
import video from '../../images/video.mp4';

export default function HomeVideo() {
  return (
    <>
      <div>
        <video className="d-block w-100" src={video} autoPlay loop muted alt="First slide" />
      </div>
    </>
  );
}
