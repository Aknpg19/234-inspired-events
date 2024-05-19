/* eslint-disable react/prop-types */
import { Component } from "react";

class HeroImg2 extends Component {
    render() {
        return (
            <div className='hero-img'>
                <div className="intro-img">
                    <img src={this.props.image} alt="IntroImg" />
                </div>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                </div>
            </div>
        )
    }
}

export default HeroImg2;