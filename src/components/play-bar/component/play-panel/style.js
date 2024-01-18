import styled from "styled-components";

export const PlayPanelWrapper = styled.div`
  position: fixed;
  height: 301px;
  width: 986px;
  margin-left: -493px;
  left: 50%;
  bottom: 50px;
  background-color: black;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  z-index: 10;

  .head {
    width: 100%;
    height: 41px;
    background-position: 0 0;
    h4 {
      position: absolute;
      left: 25px;
      top: 0;
      height: 39px;
      line-height: 39px;
      color: #e2e2e2;
    }
    .addAll {
      display: flex;
      left: 398px;
      position: absolute;
      top: 12px;
      height: 15px;
      line-height: 15px;
      cursor: pointer;
      span {
        display: inline-block;
        margin: 1px 6px 0 0;
        width: 16px;
        background-position: -24px 0;
        height: 16px;
      }
    }
    .line {
      left: 477px;
      position: absolute;
      top: 16px;
      height: 15px;
      border-left: 1px solid #000;
      border-right: 1px solid #2c2c2c;
    }
    p {
      position: absolute;
      left: 595px;
      top: 0;
      width: 346px;
      line-height: 39px;
      height: 39px;
      color: #fff;
      font-size: 14px;
      text-align: center;
    }

    .clear {
      display: flex;
      left: 490px;
      top: 12px;
      height: 15px;
      line-height: 15px;
      position: absolute;
      span {
        display: inline-block;
        height: 16px;
        width: 16px;
        background-position: -51px 0;
        margin: 1px 6px 0 0;
      }
    }

    .close {
      position: absolute;
      top: 6px;
      right: 8px;

      height: 30px;
      width: 30px;
      cursor: pointer;
      background-position: -195px 9px;

      overflow: hidden;
      text-indent: -999px;
    }
  }
  .body {
    display: flex;
    flex-grow: 1;

    .list-content {
      width: 553px;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 28px;

        &.active {
          color: #fff;
          background-color: #000;

          ::before {
            content: "";
            position: absolute;
            left: 8px;
            width: 10px;
            height: 13px;
            background: url(${require("@/assets/img/playlist_sprite.png")}) -182px
              0;
          }
        }

        .left-content {
          display: flex;
          height: 100%;
          align-items: center;
          .play-btn {
            margin-left: 10px;
            background-position: -182px 0;
            width: 10px;
            height: 13px;
          }
          .name {
            margin-left: 10px;
            width: 256px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .right-content {
          display: flex;
          .operate {
            margin-left: 10px;
            display: flex;
            width: 94px;
            justify-content: space-between;
            .collect {
              width: 16px;
              height: 16px;
              background-position: -24px 0;
            }
            .share {
              width: 16px;
              height: 16px;
              background-position: 1px 0;
            }
            .download {
              width: 16px;
              height: 16px;
              background-position: -57px -50px;
            }
            .delete {
              width: 16px;
              height: 16px;
              background-position: -51px 1px;
            }
          }
          .artist {
            margin-left: 10px;
            width: 70px;
          }
          .duration {
            margin-left: 10px;
            width: 35px;
          }
          .song-info {
            margin-left: 10px;
            width: 33px;
          }
        }
      }
    }
    .divider {
      width: 5px;
      height: 100%;
      background-color: white;
    }
    .lyrics {
      height: 260px;
      flex-grow: 1;
      overflow-y: scroll;
      .lyrics-item {
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: #989898;
        word-wrap: break-word;
      }
      .active {
        color: red;
        font-size: 14px;
      }
    }
  }
`;
