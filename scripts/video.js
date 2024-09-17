let videoGridHTML = '';

videoGrid.forEach((video) => {
  videoGridHTML += `
    <div class="video_preview">
      <div class="thumbnail_row">
        <img src= ${video.videoPreview.thumbnailRow.thumbnailImage} class="thumbnails">
        <div class="video_time">
          ${video.videoPreview.thumbnailRow.videoTime}
        </div>
      </div>

      <div class="video_info_grid">
        <div class="channel_picture">
          <img class="profile_picture" src=${video.videoPreview.videoInfoGrid.channelPicture.profilePicture}>
        </div>
        <div class="video_info">
          <p class="video_title">
            ${video.videoPreview.videoInfoGrid.videoInfo.videoTitle}
          </p>

          <p class="video_author">
            ${video.videoPreview.videoInfoGrid.videoInfo.videoAuthor}
          </p>
              
          <p class="video_Stats">
            ${video.videoPreview.videoInfoGrid.videoInfo.videoStats}
          </p>
        </div>
      </div>
    </div>
  `
})

console.log(videoGridHTML);

document.querySelector('.js_video_grid')
  .innerHTML = videoGridHTML;

/*

let videoGridHTML = '';

videoGrid.forEach((video) => {
  videoGridHTML+= `
    <div class="video_preview">
      <div class="thumbnail_row">
        <img src="${video.videoPreview.thumbnailRow.thumbnailImage}">
        <div class="video_time">
          ${video.videoPreview.thumbnailRow.videoTime}
        </div>
      </div>

      <div class="video_info_grid">
        <div class="channel_picture">
          <img class="profile_picture" src="${video.videoPreview.channelPicture.channelImage}">
        </div>
        <div class="video_info">
          <p class="video_title">
            ${video.videoPreview.videoInfo.videoTitle}
          </p>

          <p class="video_author">
            ${video.videoPreview.videoInfo.videoAuthor}
          </p>

          <p class="video_Stats">
            ${video.videoPreview.videoInfo.videoStats}
          </p>
        </div>
      </div>
    </div>
  `;

  
});

console.log(videoGridHTML);

document.querySelector('.js_video_grid')
  .innerHTML = videoGridHTML;

*/
