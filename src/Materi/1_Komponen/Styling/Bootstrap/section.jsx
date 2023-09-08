import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './section.css';
export default class section extends React.Component {

    render() {
        return(
            <section id="hero-section">
                <div className="container">
                    <div className="row">
                        <h1 className="display-4 text-white ">
                            Raih profesi idamanmu, <br/> kami bantu sampai diterima kerja
                        </h1>
                <p className="text-white opacity-75">Tanpa biaya pendaftaran</p>
                <div className="d-flex gap-3 mt-2 mt-lg-4">
                    <a className="btn bg-white rounded-pill px-4 shadow center" href="daftar">Daftar Sekarang</a>
                </div>
                    </div>
                </div>
            </section>
        )
    }
}