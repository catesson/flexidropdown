import React from "react";
import { DropDown } from "../lib/components/DropDown";
import { examples } from "./dataExample";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    
    <DropDown option={examples} optionValue="name"  placeholder="test" colorClass="red-style medium-style" color="red"/>
    </div>
);



export default App;
