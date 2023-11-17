import styled from "styled-components";
export const UserCommentWrapper = styled.div`
  .comment-title {
    font-weight: 500;
    border-bottom: 1px solid #dedede;
    margin: 15px 40px;
    font-size: 16px;
  }
  .comment {
    margin: 15px 40px;
    display: flex;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 610px;

      .body {
        .user-name {
          color: #3c72be;
        }
      }
      .comment-bottom {
        display: flex;
        justify-content: space-between;
        .time-clock {
          color: #999;
        }
        .interaction {
          display: flex;
          .likes {
            display: flex;
            .like-icon {
              background-position: -32px -676px;
              height: 20px;
              width: 20px;
              margin-right: 5px;
            }
          }
          .divider {
            margin: 0 6px;
            color: #666;
          }
          .reply {
            color: 666;
          }
        }
      }
    }

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }
`;
