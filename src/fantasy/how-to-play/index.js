import React, {useState} from "react";
import LogInComponent from "../log-in";
import SignUpComponent from "../sign-up";
import {Link} from "react-router-dom";


const HowToPlayComponent = (

) => {
    const [showFAQ, setShow] = useState(false)

    const showHandler = () => {
        setShow(true)
    }

    const hideHandler = () =>{
        setShow(false)
    }

    return (

        <div className="row mt-2">
            <div className="d-none d-md-block col-2">
            </div>

            <div className="d-none d-md-block col-8">
                <div className="list-group" >
                    <div className="list-group-item">
                        Here is all the info on how to Play
                    </div>
                    <div className="list-group-item">
                        {showFAQ ?
                            <div>
                                <button onClick={() => hideHandler()}> Frequently Asked Questions </button>
                                <div>
                                    All the FAQ's will go here like how did we get so good at coding
                                </div>
                            </div>
                            :
                            <div>
                                <button onClick={() => showHandler()}> Frequently Asked Questions </button>
                            </div>
                        }


                    </div>
                </div>
            </div>

            <div className="col-12 d-md-none">
                <div className="list-group" >
                    <div className="list-group-item">
                        Here is all the info on how to Play
                    </div>
                    <div className="list-group-item">
                        {showFAQ ?
                            <div>
                                <button onClick={() => hideHandler()}> Frequently Asked Questions </button>
                                <div>
                                    All the FAQ's will go here like how did we get so good at coding
                                </div>
                            </div>
                            :
                            <div>
                                <button onClick={() => showHandler()}> Frequently Asked Questions </button>
                            </div>
                        }


                    </div>
                </div>
            </div>

            <div className="d-none d-md-block col-2">
            </div>

        </div>





    );
};
export default HowToPlayComponent;