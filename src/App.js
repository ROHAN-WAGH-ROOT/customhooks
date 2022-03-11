import { useState } from "react";
import { useNumber } from "../CustomHook";
import { useUserStatus } from "../StatusHook";
import { useCreame } from "../IceCreaamy";
import "./styles.css";

export default function App() {
  const [isValidUser, userName] = useUserStatus(1);
  const [scoop, flavour] = useCreame("butter-scoatch");
  return (
    <div className="App">
      {/* {flavour} */}
      {scoop}
      {/* {userName} */}
      {/* {isValidUser ? <h5>Authenticated</h5> : <h5>Please login</h5>} */}
    </div>
  );
}
