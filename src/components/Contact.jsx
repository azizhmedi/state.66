import React, { Component } from "react";
export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://media.licdn.com/dms/image/D4E03AQGEtaIFq_DWWg/profile-displayphoto-shrink_800_800/0/1698484133290?e=2147483647&v=beta&t=CppNseENPVG-ntkhDmtoAvOh_dIeMzxJoBSJm77B45I",
      number: 28665001,
      email: "zizouhmedi@gmail.com",
    };
  }
  render() {
    return (
      <div className="card2">
        <img
          style={{ width: "50px", height: "50px" }}
          src={this.state.image}
          alt=""
        />
        <h1 className="linkd">{this.state.number}</h1>
        <h1 className="linkd">{this.state.email}</h1>
      </div>
    );
  }
}
