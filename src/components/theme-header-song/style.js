import styled from "styled-components";
export const ThemeHeaderSongWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: flex-end;
    .title {
      font-weight: 400;
      font-size: 20px;
      padding-bottom: -5px;
      margin-right: 15px;
    }
    .count {
      color: #666;
      margin-bottom: 5px;
    }
  }

  .right {
    .count {
      color: #c20c0c;
    }
  }
`;
