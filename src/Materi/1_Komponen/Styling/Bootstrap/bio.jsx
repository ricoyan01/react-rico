import React from "react";
import './section.css'

export default class Bio extends React.Component {

    render() {
        return(
            <section id="values-item">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="d-flex flex-row flex-lg-column">
                            </div>
                            </div>
                            <div className="d-flex flex-column col-8 ms-3 ms-lg-0 detail mt-3 mt-md-0">
                            <h5>My Biodata</h5>
                            <p>Quaerat provident commodi consectetur veniam similique ad 
                                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                                quasi aliquam eligendi, placeat qui corporis!</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}