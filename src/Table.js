import React from "react";
import auth from "./auth";
import Header from './Header';
import { Menu } from "./Menu";
import Footer from './Footer';

export const Table = props => {
  return (
    <>
    <div>
      <div class="wrapper">
      <Header/>
      <Menu/>
      <Footer/>
      </div>
      
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
    </>
  );
};