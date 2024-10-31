import { videoGrid, playBackGrid } from "./data.js";

let videoPlayBackHTML = '';

playBackGrid.forEach((playback) => {
  videoPlayBackHTML += `
    <div class="video-playback">
        <video controls poster="thumbnails/thumbnail-1.webp" class="video">
          <source src="" type="mp4">
          Just Testing...
        </video>
      </div>
      <div class="video-info-container">
        <div class="video-load-info">
          <p class="video-load-text">Talking Tech and AI with the Google CEO Sunday Punchai!</p>
        </div>
        <div class="video-load-stats">
          <img src="authors_pic/channel-1.jpeg" class="video-load-profile-image">
          <div class="author-info">
            <div class="video-author-name">Marquee Brownee</div>
            <div class="author-subscriber-stats">19.6M subscribers</div>
          </div>
          <div>
            <button class="subscribe-button">Subscribe</button>
          </div>
          <div class="user-option">
            <div class="like-button">
              <img src="icons/like.svg" class="like-image">
              <p class="like-count">8.3k</p>
              <div class="demarcation">

              </div>
            </div>
            <div class="unlike-button">
              <img src="icons/unlike.svg" class="unlike-image">
            </div>
            <div class="share-button">
              <img src="icons/share.png" class="share-image">
              <p class="share-text">Share</p>
            </div>
            <div class="download-button">
              <img src="icons/download.png" class="download-image">
              <p class="download-text">Download</p>
            </div>
            <div class="option-button">
              <img src="icons/option.png" class="option-image">
            </div>
          </div>

        </div>

      </div>
  `;

});

document.getElementById('video-view-container')
  .innerHTML = videoPlayBackHTML;

