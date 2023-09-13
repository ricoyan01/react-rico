import React from "react";
import ClassComponent from "./ClassCompnent";
import FunctionalComponent from "./FunctionalComponent";

export default class Komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent nama = "Rico Yan"/>
                <FunctionalComponent/>
            </div>
        )
    }
}