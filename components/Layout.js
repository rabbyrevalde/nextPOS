import React, { Component } from "react";
import NextHeader from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";

export class Layout extends Component {
  render() {
    return (
      <div>
        <NextHeader>
          <title>My POS</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
        </NextHeader>
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 p-0">
              <Header />
              {this.props.children}
            </div>
            <div className="col-3 p-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
