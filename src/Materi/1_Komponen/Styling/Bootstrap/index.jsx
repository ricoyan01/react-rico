import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";
import Section from "./section";
import Bio from "./bio";
export default class Bootstrap extends React.Component {

    render() {
        return(
            <div>
                <Navbar/>
                <Section/>
                <Bio/> 
            </div>
        )
    }
}