/**
 * Created by kvineetha on 8/19/16.
 */

import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../../styles/wip.css';

export default class WIP extends Component {
  render() {
    return (
      <div className="wipContainer">
        <img className="logo" src={'./../../images/Hervis-logo-white.png'} alt="logo" />
        <img className="constructionImage" src={'./../../images/main.png'} alt="construction" />
      </div>
    );
  }
}

