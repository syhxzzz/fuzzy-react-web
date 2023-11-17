import styled from "styled-components";

export const SetterSingerWrapper = styled.div`
  padding: 20px;
  .singer-list {
    .item {
      display: flex;
      height: 62px;
      margin-top: 14px;
      background-color: #fafafa;
      text-decoration: none;

      :hover {
        background-color: #f4f4f4;
      }
      img {
        width: 62px;
        height: 62px;
      }

      .info {
        margin: 8px 0 0 10px;
        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }
        .name {
          margin-top: 5px;
        }
      }
    }
  }
  .apply-for {
    margin-top: 12px;
    a {
      color: #333;
      text-decoration: none;
      font-weight: 700;
      text-align: center;
      display: block;
      line-height: 31px;
      height: 31px;
      border: 1px solid #c3c3c3;
      border-radius: 4px;
    }
  }
`;
