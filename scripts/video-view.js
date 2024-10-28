import { videoGrid, playBackGrid } from "./data";

let videoHTML = '';

const html=`
  <div class="video-view">
    <img src="thumbnails/thumbnail-1.webp">
  </div>
  <div class="video_info_grid">
    <div class="channel_picture">
      <img src="authors_pic/channel-1.jpeg" class="profile_picture"> 
    </div>
    <div>
      <p>Talking Tech and AI with the Google CEO Sunday Punchai!</p>
    </div>
  </div>
`;

playBackGrid.forEach((video) => {
  videoHTML += html;

})

console.log(videoHTML);

document.getElementById('video-view-container')
  .innerHTML = videoHTML;

