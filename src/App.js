import React, { useEffect, useRef, useState } from "react";
import Splash from "./modules/Splash";
import Nav from "./components/Navigation/Nav";
import gsap from "gsap";
import { Back } from "gsap/gsap-core";
import Clock from "./modules/Clock";

export default function App() {

  return (
    <div className="App">
      <Splash />
      <Nav/>
      <Clock />
    </div>
  );
}

//const wrapper = useRef(null);

//   useEffect(() => {
//     const [splash, nav] = wrapper.current.children;
//     const [logo] = splash.children;
//     const [navTabs, navSwitch, navMain, navBasket] = nav.children;
//     const [contentBasket] = navBasket.children;
//     const [contentMain] = navMain.children;
//     const [contentSwitch] = navSwitch.children;
//     const [contentTabs] = navTabs.children;

//     const tl = gsap.timeline();
//     tl.set([navTabs, navSwitch, navMain, navBasket],{y:'-50%', x:'-50%'})
//     tl.to(logo, { scale: 1, ease: Back.easeOut.config(1.7), duration: 1 })
//     .to(navBasket, {scale:'1', duration:1}, '-=.7')
//     .to(navMain, {scale:'1', duration:1}, '-=.9')
//     .to(navSwitch, {scale:'1', duration:1}, '-=.9')
//     .to(navTabs, {scale:'1', duration:1}, '-=.9')
//     .to(splash, {duration:1, top:'75%', autoAlpha:'.4', zIndex:3})
//     .to(nav, {duration:1, top:'4%'},'-=1')
//     .to([contentBasket, contentMain, contentSwitch, contentTabs], {scale:1, duration:1},'-=.5')

// });
