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
    display: flex;
    justify-content: center;
    align-items: center;
    .prev-btn {
      height: 30px;
      width: 30px;
      background-position: -26px -129px;
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
      height: 30px;
      width: 30px;
      background-position: -111px -129px;
    }
  }

  .head-cover {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;
