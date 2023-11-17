import styled from "styled-components";
export const RankingListWrapper = styled.div`
  padding: 0 40px;

  .play-list {
    table {
      border: 1px solid #d9d9d9;
      border-top: 3px solid #ab2c17;
      width: 100%;
      thead {
        th {
          height: 34px;
          line-height: 34px;
          background-image: url("/public/assets/img/sprite_table.png");
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          padding-left: 10px;
        }
        .ranking {
          width: 78px;
          border-left: none;
        }
        .duration {
          width: 91px;
        }
        .singer {
          width: 173px;
        }
      }
      tbody {
        td {
          padding: 6px 10px;
          &:hover .duration {
            display: none;
            position: absolute;
          }
          &:hover .icon-bar {
            position: absolute;
            .add-icon {
              display: inline-block;
              width: 18px;
              height: 18px;
              background-position: 0 -700px;
            }
            .favor-icon {
              display: inline-block;
              width: 18px;
              height: 18px;
              background-position: -45px -87px;
            }
            .share-icon {
              display: inline-block;
              width: 18px;
              height: 18px;
              background-position: -45px -137px;
            }
            .download-icon {
              display: inline-block;
              width: 18px;
              height: 18px;
              background-position: -17px -717px;
            }
          }
        }
        tr:nth-child(2n) {
          background-color: #fff;
        }
        tr:nth-child(2n + 1) {
          background-color: #f7f7f7;
        }

        .ranking-num {
          display: flex;

          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }

          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }

        .song-name {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }

          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
          }

          .name {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
