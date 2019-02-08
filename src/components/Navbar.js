import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";

export default class Navbar extends Component {
  tweetModal = () => {
    console.log("You clicked me!");
  };
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-sm bg-light justify-content-between">
        <ul className="navbar-nav align-items-center">
          <li>
            <span className="fas fa-home"> Home </span>
          </li>
          <li>
            <span className="fas fa-bolt"> Moments</span>
          </li>
          <li>
            <span className="far fa-bell"> Notifications </span>
          </li>
          <li>
            <span className="far fa-envelope"> Messages</span>
          </li>
        </ul>

        <a className="navbar-brand" href="/">
          <img
            src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"
            width="30"
            height="30"
            alt="Twitter Icon"
          />
        </a>

        <TweetButton
          onClick={() => this.tweetModal()}
          className="btn btn-outline-primary my-2 my-sm-0"
          type="submit"
        >
          tweet
        </TweetButton>
      </nav>
    );
  }
}

const TweetButton = styled.button`
  text-transform: capitalize;
  padding: 6px 16px;
  border-radius: 100px;
  color: white;
  background-color: #1da1f2;
  float: right;
  &:focus {
    border-radius: 100px;
    /* border-color: #1da1f2; */
  }
`;
