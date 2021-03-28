import React from "react";

const timeline = [
  {
    month: "Jan'20",
    cover: require("../assets/month-art-cover/jan.jpg"),
    info: (
      <ul>
        <li>Web Development Sessions</li>
      </ul>
    )
  },
  {
    month: "Feb'20",
    cover: require("../assets/month-art-cover/feb.jpg"),
    info: (
      <ul>
        <li>Hour Of Code</li>
        <li>Playing Around C++</li>
      </ul>
    )
  },
  {
    month: "Apr'20",
    cover: require("../assets/month-art-cover/apr.jpg"),
    info: (
      <ul>
        <li>Distinguished Speaker Program</li>
        <li>Code-Intine Bytes</li>
        <li>Week Of Learning</li>
      </ul>
    )
  },
  {
    month: "May-Jul'20",
    cover: require("../assets/month-art-cover/jul.jpg"),
    info: (
      <ul>
        <li>Team Hiring</li>
      </ul>
    )
  },
  {
    month: "Aug'20",
    cover: require("../assets/month-art-cover/aug.jpg"),
    info: (
      <ul>
        <li>Summer DSP by Mr. Ankit Kariryaa</li>
        <li>Cloud Computing & Microsoft Azure Session</li>
        <li>Project Showdown (Round 1)</li>
      </ul>
    )
  },
  {
    month: "Sep'20",
    cover: require("../assets/month-art-cover/sep.jpg"),
    info: (
      <ul>
        <li>Project Showdown (Final Round)</li>
        <li>
          Introduction to Google Crowdsource (powered by Google Assistant)
        </li>
        <li>Cognitive Learning Session</li>
      </ul>
    )
  },
  {
    month: "Oct'20",
    cover: require("../assets/month-art-cover/oct.jpg"),
    info: (
      <ul>
        <li>Fun Events (Meme Wars, Video Editing Contest)</li>
        <li>Hacktoberfest 2020</li>
      </ul>
    )
  },
  {
    month: "Nov'20",
    cover: require("../assets/month-art-cover/nov.jpg"),
    info: (
      <ul>
        <li>
          <b>BVEST Events:</b>
        </li>
        <li>Innovage</li>
        <li>Caseopedia</li>
        <li>Clash of Codes</li>
        <br />
        <li>Webinar Series on Master’s Admission</li>
        <li>Cyber Crimes & Online Attacks Webinar</li>
        <li>ESP - "Mystery Of Malwares" (by Ms. Chenny Ren)</li>
      </ul>
    )
  },
  {
    month: "Dec'20",
    cover: require("../assets/month-art-cover/dec.jpg"),
    info: (
      <ul>
        <li>Hour Of Code</li>
      </ul>
    )
  },
  {
    month: "Jan'21",
    cover: require("../assets/month-art-cover/jan.jpg"),
    info: (
      <ul>
        <li>Informal Freshers' Orientation</li>
      </ul>
    )
  },
  {
    month: "Feb'21",
    cover: require("../assets/month-art-cover/feb.jpg"),
    info: (
      <ul>
        <li>Web Development Session 1 - 27th Feb</li>
      </ul>
    )
  },
  {
    month: "Mar'21",
    cover: require("../assets/month-art-cover/mar.jpg"),
    info: (
      <ul>
        <li>Web Development Session 2 - 20th March</li>
        <li>DSP'21 with Dr. Juan Wachs as the speaker - 25th March</li>
      </ul>
    )
  }
];

export const timelineData = timeline.reverse();
