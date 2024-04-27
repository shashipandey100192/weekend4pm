import React from 'react'
import { Link } from 'react-router-dom';


function Coursedefaultpage() {
    const mernp = "https://www.rogersoft.com/storage/attachments/1695643238.jpeg";
    const expressjs = "https://miro.medium.com/v2/resize:fit:1024/0*vq-JSMynSHUPXx70";

    return (
        <div className='container-fluid' >
            <div className='row'>
                <div className='col-sm-6'>
                        <div class="card border shadow">
                            <img src={mernp} class="card-img-top" alt="react poster"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/courselist/reactjs" class="btn btn-primary">ReadMore</Link>
                                </div>
                        </div>
                </div>
                <div className='col-sm-6'>
                        <div class="card border shadow">
                            <img src={expressjs} class="card-img-top" alt="react poster"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                </div>
                <div className='col-sm-6'>
                        <div class="card border shadow">
                            <img src={expressjs} class="card-img-top" alt="react poster"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                </div>
                <div className='col-sm-6'>
                        <div class="card border shadow">
                            <img src={expressjs} class="card-img-top" alt="react poster"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Coursedefaultpage