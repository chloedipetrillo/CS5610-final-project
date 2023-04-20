import React from "react";
import "./index.css"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";



const HomeComponent = (

) => {
    const { currentUser } = useSelector((state) => state.users);
    const navigate = useNavigate();
    const signUpHandler = () => {
        (navigate("../login-signup"))

    }






    return (
        <>
            <div className=" row" >
                <div className=" d-none d-md-block col-12 wd-home-page fw-bolder mb-3 ">
                    Premier Fantasy League
                </div>
                <div className="col-12 d-md-none wd-home-page fw-bolder mb-3 ">
                    Premier <br></br>
                    Fantasy League
                </div>
            </div>

            <div className="row mb-2 wd-background-home">

                {/*this only looks good in full screen*/}
                <div className="col-12">
                    <div className="">
                        <div className="slider position-relative">
                            <span id="slide-1"></span>
                            <span id="slide-2"></span>
                            <span id="slide-3"></span>
                            <div className="image-container  ">
                                <img src="https://resources.premierleague.com/premierleague/photo/2017/08/04/776ffd6c-8531-4241-9a47-b7cf51e442d6/GettyImages-605696572.jpg"
                                     className="slide wd-width-height wd-img" />
                                <img src="https://resources.premierleague.com/premierleague/photo/2016/11/17/d6105a4c-d7a7-4c19-b51f-9a0e0b54005c/GettyImages-619482788.jpg"
                                     className="slide wd-width-height wd-img"/>
                                <img src="https://i0.wp.com/sportmuse.net/wp-content/uploads/2019/01/stadium.jpeg"
                                     className="slide wd-width-height wd-img"/>

                            </div>
                            <div className="buttons">
                                <span className="pe-2">  <a href="#slide-1"></a> </span>
                                <span className="pe-2">  <a href="#slide-2"></a> </span>

                                <a  href="#slide-3"></a>
                            </div>

                            {currentUser !== null ?
                                <div className="wd-welcome-nudge d-none d-lg-block">
                                    Welcome, {currentUser.firstName}!
                                </div> :
                                <div className="wd-welcome-nudge d-none d-lg-block">
                                    Welcome!
                                </div>}

                            {currentUser !== null ?
                                <div className=" d-none d-sm-block d-lg-none wd-welcome-nudge-md">
                                    Welcome, {currentUser.firstName}!
                                </div> :
                                <div className="d-lg-none wd-welcome-nudge-md">
                                    Welcome!
                                </div>}

                            {currentUser !== null ?
                                <div className="d-sm-none wd-welcome-nudge-xs">
                                    Welcome, <br></br>{currentUser.firstName}!
                                </div> :
                                ''}

                        </div>



                    </div>


                </div>

            </div>





            <div className="row">
                {/*<div className="d-none d-md-block col-3"></div>*/}

                {currentUser === null ?
                    <>
                        <div className="col-2">

                        </div>
                        <div className="center col-8 wd-home-register-box mt-2">
                            Register to play Fantasy Premier League!

                            <button className="d-none d-lg-block btn rounded-pill float-end wd-sign-up mt-2"
                                    onClick={() => signUpHandler()}>

                                Log In/Sign Up
                            </button>

                            <div className="fw-lighter wd-font-register">
                                Create your own team, join leagues, and play against your friends!
                            </div>

                            <button className="d-lg-none btn rounded-pill wd-sign-up"
                                    onClick={() => signUpHandler()}>

                                Log In/Sign Up
                            </button>

                        </div>
                        <div className="col-2">

                        </div>
                    </> :
                    ""
                }








                {/*<div className="d-none d-md-block col-3"></div>*/}

            </div>




        </>



    );
};
export default HomeComponent;