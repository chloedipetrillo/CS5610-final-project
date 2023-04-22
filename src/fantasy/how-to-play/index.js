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

            <div className="col-12 d-md-block col-md-8">
                <div className="list-group" >
                    <div className="list-group-item override-border-radius override-pink-dark-information fw-bold text-white wd-larger-font">
                        Game Information:
                    </div>
                    <div className="list-group-item override-search-light-grey">
                        1) Create an account
                    </div>
                    <div className="list-group-item override-search-light-grey">
                        2) Draft your favorite players
                    </div>
                    <div className="list-group-item override-search-light-grey">
                        3) Join whichever leagues you'd like
                    </div>
                    <div className="list-group-item override-search-light-grey">
                        4) Check back in to see how your team is doing and update your drafted team
                    </div>
                    <div className="list-group-item override-search-light-grey">
                    </div>
                    <div className="list-group-item override-search-light-grey">
                        Interact with everyone by commenting on player profile pages
                    </div>
                    <div className="list-group-item override-search-light-grey">
                       Interact with friends by following them and posting to their profile walls!
                    </div>

                    <div className="list-group-item override-search-light-grey">
                        {showFAQ ?
                            <div className="">
                                <div className="center">
                                    <button className="btn override-button wd-sign-up fw-bold " onClick={() => hideHandler()}> Frequently Asked Questions </button>
                                </div>
                                <div className="mt-2">
                                    <div className="fw-bold">
                                        How do I create a league for me and my friends?
                                    </div>
                                    <div className="fw-light">
                                        Sign up with a commissioner account. On the commissioner page, you can create a league
                                        with the name of your choosing. Then you friends will be able to join!
                                    </div>

                                </div>
                                <div  className="mt-4">
                                    <div className="fw-bold">
                                        Where do I see what place I'm in?
                                    </div>
                                    <div className="fw-light">
                                        Under the MyLeagues pages, view the leagues you're in. You can click the league name
                                        and it will navigate to the leaderboard page.
                                    </div>

                                </div>
                                <div  className="mt-4">
                                    <div className="fw-bold">
                                        Do I have to pay for an account?
                                    </div>
                                    <div className="fw-light">
                                        No.
                                    </div>

                                </div>
                                <div  className="mt-4">
                                    <div className="fw-bold">
                                        Who can see my personal information?
                                    </div>
                                    <div className="fw-light">
                                        Only you and site admins can see your personal information.
                                    </div>

                                </div>
                                <div  className="mt-4">
                                    <div className="fw-bold">
                                        When are points updated?
                                    </div>
                                    <div className="fw-light">
                                        The admin will update points accordingly on a weekly basis.
                                    </div>

                                </div>
                                <div  className="mt-4">
                                    <div className="fw-bold">
                                        How do I draft or edit my draft?
                                    </div>
                                    <div className="fw-light">
                                        Under the MyLeague -> Draft page, you are able to draft a team or update your team.
                                        You team will appear on the right side of the screen. You can draft or undraft players by clicking the green
                                        draft button or red X button. Make sure to press save when you are done!
                                    </div>

                                </div>
                            </div>
                            :
                            <div className="center">
                                <button className="btn override-button wd-sign-up fw-bold" onClick={() => showHandler()}> Frequently Asked Questions </button>
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