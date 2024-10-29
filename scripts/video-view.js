import { videoGrid, playBackGrid } from "./data";

let videoHTML = '';

playBackGrid.forEach((playback) => {
  videoPlayBackHTML += `
    
  `;

})

console.log(videoPlayBackHTML);

document.getElementById('video-view-container')
  .innerHTML = videoHTML;

