import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";


//map method ka used hua hai line no.27 me
function ncard(val){
  console.log(val);
  return(
    <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}




ReactDOM.render(
<>

<h1 className="heading_style">List of top 500 Netflix Series in 2022</h1>
{Sdata.map(ncard)};

</>,
document.getElementById("root")
);