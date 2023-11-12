import styled from "styled-components";

export const PlayListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c0200c;
  padding-bottom: 6px;
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .title {
    font-size: 24px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .select {
    cursor: pointer;
    position: relative;
    top: 2px;
    width: 91px;
    height: 31px;
    line-height: 31px;
    background-color: #fafafa;
    color: #0c73c2;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    margin-left: 20px;
    :hover {
      background-color: #fff;
    }
    i {
      color: #0c73c2;
      background-position: -70px -543px;
      position: relative;
      height: 10px;
      width: 20px;
      right: -9px;
      bottom: -3px;
      display: inline-block;
    }
  }
`;
export const HeaderRight = styled.div`
  .hot {
    background-color: red;
    color: #fff;
    border: 1px solid #aaa;
    border-radius: 3px;
    background-color: #c20c0c;
    width: 46px;
    height: 29px;
  }
`;
