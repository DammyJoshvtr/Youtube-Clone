import { videoGrid, playBackGrid } from "./data.js";

let videoPlayBackHTML = '';

playBackGrid.forEach((playback) => {
  videoPlayBackHTML += `
    <div class="video-playback">
        <video controls poster="${playback.videoPlayBack.video}" class="video">
          <source src="" type="mp4">
          Just Testing...
        </video>
      </div>
      <div class="video-info-container">
        <div class="video-load-info">
          <p class="video-load-text">${playback.videoLoadInfo.videoLoadText}</p>
        </div>
        <div class="video-load-stats">
          <img src="${playback.videoLoadStats.videoLoadProfileImage}" class="video-load-profile-image">
          <div class="author-info">
            <div class="video-author-name">${playback.videoLoadStats.authorIfo.videoAuthorName}</div>
            <div class="author-subscriber-stats">${playback.videoLoadStats.authorIfo.authorSubscriberStats}</div>
          </div>
          <div>
            <button class="subscribe-button">Subscribe</button>
          </div>
          <div class="user-option">
            <div class="like-button">
              <img src="${playback.videoLoadStats.userOption.likeButton.likeImage}" class="like-image">
              <p class="like-count">${playback.videoLoadStats.userOption.likeButton.likeCount}</p>
              <div class="demarcation">

              </div>
            </div>
            <div class="unlike-button">
              <img src="${playback.videoLoadStats.userOption.unLikeButton.unLikeImage}" class="unlike-image">
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


function loadVideo() {
  const clickElement = document.querySelector('.anchor-link');
  
  const findObject = playBackGrid.filter((playBackGrid) => {
    videoGrid.videoPreview.videoInfoGrid.videoTitle === playBackGrid.videoLoadInfo.videoLoadText;
  });

  clickElement.addEventListener('click', (event) => {
    if (findObject) {
      for (let i = 0; i < playBackGrid.length; i++) {
        const videoArr = playBackGrid[i];
        console.log(videoArr);
      }

    }
  })


}