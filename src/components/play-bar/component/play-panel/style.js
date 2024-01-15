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

  color: white;
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
      left: 398px;
      position: absolute;
      top: 12px;
      height: 15px;
      line-height: 15px;
      cursor: pointer;
    }
    .line {
      left: 477px;
      position: absolute;
      top: 13px;
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
`;
