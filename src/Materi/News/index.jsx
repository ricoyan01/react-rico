import React from "react";
import Navigationbar from "./navbar";
import News from "./news";

export default class Berita extends React.Component {

  render() {
    return(
      <div>
        <Navigationbar/>
        <News/>
      </div>
    )
  }
} 