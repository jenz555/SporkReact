import React from 'react'
var Slider = require('react-slick');


var Carousel = React.createClass({
    render: function () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };

        return (
            <Slider {...settings}>
                <div>
                    <div className="flex__container">
                        <div className="flex__item">
                            <div className="circle circle--lg circle--green">
                                <div className="circle__number--22">
                                    4
                                </div>
                            </div>
                            <div className="txt txt--xs">Rescues<br/>
                                Remaining</div>
                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--fuel">
                                <img src="images/svgs/fuel.svg" />

                            </div>
                            <div className="txt txt--xs">12/24<br/>
                                <span className="txt--brand">Fuel</span>
                            </div>
                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--tow">
                                <img src="images/svgs/Tow.svg" />

                            </div>
                            <div className="txt txt--xs">12/26<br/>
                                <span className="txt--brand">Tow</span>
                            </div>
                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--car">
                                <img src="images/svgs/car.svg" />

                            </div>
                            <div className="circle circle--sm circle--dusty">
                                <div className="circle__number--small">
                                    1
                                </div>
                            </div>

                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--car">
                                <img src="images/svgs/car.svg" />

                            </div>
                            <div className="circle circle--sm circle--dusty">
                                <div className="circle__number--small">
                                    2
                                </div>
                            </div>
                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--car">
                                <img src="images/svgs/car.svg" />

                            </div>
                            <div className="circle circle--sm circle--dusty">
                                <div className="circle__number--small">
                                    3
                                </div>
                            </div>
                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--car">
                                <img src="images/svgs/car.svg" />

                            </div>
                            <div className="circle circle--sm circle--dusty">
                                <div className="circle__number--small">
                                    4
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
                <div>

                    <div className="flex__container flex__container--noBorder">
                        <div className="flex__item">
                            <div className="circle circle--lg circle--green">
                                <div className="circle__number--16">
                                    35
                                </div>
                            </div>
                            <div className="txt txt--xs">Miles<br/>
                                Remaining</div>
                        </div>
                        <div className="flex__item flex__item--grow">
                            <img src="images/svgs/towMileage.svg" className="img towMiles__img"/>


                        </div>


                    </div>



                </div>
                <div>

                    <div className="flex__container">
                        <div className="flex__item">
                            <div className="circle circle--lg circle--green">
                                <div className="circle__number--16">
                                    3
                                </div>
                            </div>
                            <div className="txt txt--xs">Members<br/>
                                Remaining</div>
                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--member">
                                <img src="images/svgs/avatar.svg" className="img"/>
                            </div>

                            <div className="txt txt--brand txt--xs">Elizabeth</div>

                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--member">
                                <img src="images/svgs/avatar.svg" className="img"/>
                            </div>
                            <div className="txt txt--brand txt--xs">Charlie</div>

                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--member">
                                <img src="images/svgs/avatarAdd.svg" className="img"/>
                            </div>
                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--member">
                                <img src="images/svgs/avatarAdd.svg" className="img"/>
                            </div>
                        </div>
                        <div className="flex__item">
                            <div className="icon icon__container icon--member">
                                <img src="images/svgs/avatarAdd.svg" className="img"/>
                            </div>
                        </div>

                    </div>

                </div>

            </Slider>


        );
    }
});

module.exports = Carousel;