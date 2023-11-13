import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  padding: 25px 0;

  .header {
    padding: 12px 12px 10px;
    font-size: 14px;
    font-family: "Courier New", Courier, monospace;
    color: #000;
    font-weight: 700;
  }
  .item {
    padding-left: 20px;
    height: 62px;
    cursor: pointer;
    display: flex;
    align-items: center;
    .active,
    &:hover {
      background-color: #e6e6e6;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }

  .info {
    padding-left: 10px;
    .update {
      color: #999;
      margin-top: 5px;
    }
  }
`;
