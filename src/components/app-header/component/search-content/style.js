import styled from "styled-components";

export const SearchContentWrapper = styled.div`
  z-index: 99;
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
    padding: 5px;
    &:hover {
      background-color: #ccc;
    }
  }

  .search-content {
    position: relative;
  }

  .search-title {
    margin-top: 5px;
  }

  .left {
    width: 60px;
    display: flex;
  }

  .song-part {
    display: flex;
    .song-icon {
      margin: 5px;
      width: 18px;
      height: 18px;
      background-position: -32px -298px;
    }
  }
  .artist-part {
    display: flex;
    .artist-icon {
      margin: 5px;
      width: 18px;
      height: 18px;
      background-position: -49px -298px;
    }
  }
  .album-part {
    display: flex;
    .album-icon {
      margin: 5px;
      width: 18px;
      height: 18px;
      background-position: -32px -316px;
    }
  }
  .playlist-part {
    display: flex;
    .playlist-icon {
      margin: 5px;
      width: 18px;
      height: 18px;
      background-position: -49px -316px;
    }
  }
  .song-list,
  .album-list,
  .playlist-list,
  .artist-list {
    width: 180px;
    text-overflow: ellipsis; /*让截断的文字显示为点点。还有一个值是clip意截断不显示点点*/
    white-space: nowrap; /*让文字不换行*/
    overflow: hidden; /*超出要隐藏*/
    display: flex;
    flex-direction: column;

  }
`;
