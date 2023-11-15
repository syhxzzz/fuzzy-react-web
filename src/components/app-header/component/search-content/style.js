import styled from "styled-components";

export const SearchContentWrapper = styled.div`
  position: absolute;
  width: 240px;
  background-color: #fff;
  top: 55px;
  border: 2px solid #bebebe;
  border-radius: 3px;
  box-shadow: 0 0 5px black;
  color: #000;
  .suggest-user {
    height: 40px;
    line-height: 15px;
    border-bottom: 1px solid #bebebe;
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: #666;
  }
  .item {
    margin: 5px;
  }

  .song-part {
    display: flex;
    .song-icon {
      padding: 5px;
      width: 50px;
    }
  }
  .artist-part {
    display: flex;
    .artist-icon {
      padding: 5px;
      width: 50px;
    }
  }
  .album-part {
    display: flex;
    .album-icon {
      padding: 5px;
      width: 50px;
    }
  }
  .playlist-part {
    display: flex;
    .playlist-icon {
      padding: 5px;
      width: 50px;
    }
  }
  .song-list,
  .album-list,
  .playlist-list,
  .artist-list {
    /* width: 180px; */
    text-overflow: ellipsis; /*让截断的文字显示为点点。还有一个值是clip意截断不显示点点*/
    white-space: nowrap; /*让文字不换行*/
    overflow: hidden; /*超出要隐藏*/
  }
`;
