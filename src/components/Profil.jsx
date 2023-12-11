import React, { Component } from "react";

export default class Profil extends Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://media.licdn.com/dms/image/D4E03AQGEtaIFq_DWWg/profile-displayphoto-shrink_800_800/0/1698484133290?e=2147483647&v=beta&t=CppNseENPVG-ntkhDmtoAvOh_dIeMzxJoBSJm77B45I",
      name: "hmedi aziz",
      profession: "FullStack JS Web Developer",
      bio: "Gaming & Coding",
      timer: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
  render() {
    return (
      <div className="card">
        <img style={{ borderRadius: " 800px" }} src={this.state.image} alt="" />
        <h1>{this.state.name}</h1>
        <h1>{this.state.profession}</h1>
        <p>{this.state.bio}</p>
        <h1 className="timer">{this.state.timer}</h1>
      </div>
    );
  }
}
