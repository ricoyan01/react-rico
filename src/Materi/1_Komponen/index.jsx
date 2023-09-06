import React from "react";
import ClassComponent from "./Pembahasan/ClassCompnent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";

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