import React from "react";
import Router from "next/router";
export default function Layout1() {
  return (
    <>
      <h1>Discover</h1>
      <button onClick={() => Router.push("/")}>Go back to home</button>
      <p>111</p>
    </>
  );
}
