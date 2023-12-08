import styled from "styled-components";

export const PlayBarWrapper = styled.div`
  position: fixed;
  background-color: rgba(49, 48, 48, 1);
  height: 50px;
  width: 100vw;
  bottom: 0;

  display: flex;
  justify-content: center;

  .play-button {
    .prev-btn {
      background-size: 100px 100px;
      background-position: -100px -100px;
    }
  }
  .head-cover {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;
