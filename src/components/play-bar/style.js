import styled from "styled-components";

export const PlayBarWrapper = styled.div`
  position: fixed;
  background-color: rgba(49, 48, 48, 1);
  height: 50px;
  width: 100vw;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  .play-button {
    display: flex;
    justify-content: center;
    align-items: center;
    .prev-btn {
      height: 30px;
      width: 30px;
      background-position: -26px -129px;
      margin-right: 8px;
      margin-left: 30px;
    }
    .now-playing {
      height: 40px;
      width: 40px;
      background-position: -37px -162px;
    }
    .now-stopping {
      height: 40px;
      width: 40px;
      background-position: -37px -201px;
    }
    .next-btn {
      margin-right: 30px;
      margin-left: 8px;
      height: 30px;
      width: 30px;
      background-position: -111px -129px;
    }
  }

  .play {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    .song-info {
      display: flex;
      margin-bottom: -5px;
      .song-name {
        color: #e8e8e8;
        margin-right: 15px;
      }
      .song-singer {
        color: #9b9b9b;
      }
    }
    .progress-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url("/assets/img/progress_bar.png") right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url("/assets/img/progress_bar.png") left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url("/assets/img/sprite_icon.png") 0 -250px;
        }
      }
      .now-time {
        color: #a1a1a1;
      }
      .total-time {
        color: #797979;
      }
      .divider {
        color: #797979;
        margin: 0 3px;
      }
    }
  }

  .head-cover {
    img {
      width: 35px;
      height: 35px;
      border: 1px solid #2b2b2b;
      border-radius: 5px;
    }
  }

  .operation {
    margin: 0 10px;
    display: flex;
    width: 85px;
    justify-content: space-between;
    .lyrics {
      height: 25px;
      width: 25px;
      position: relative;
    }
    .collect {
      height: 25px;
      width: 25px;
      background-position: -88px -163px;
    }
    .share {
      height: 25px;
      width: 25px;
      background-position: -114px -163px;
    }
  }
`;
