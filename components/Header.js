import React, { Component } from "react";
import Link from "next/link";

export class Header extends Component {
  render() {
    return (
      <div className="border p-3">
        <Link href="/">
          <a>My Header</a>
        </Link>
      </div>
    );
  }
}

export default Header;
