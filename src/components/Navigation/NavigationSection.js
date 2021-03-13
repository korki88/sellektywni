import React, { useRef, useEffect, useState} from "react";
import gsap from "gsap";

export default function NavigationSection({ section }) {
  const wrapper = useRef();
  useEffect(() => {
    const navSectionTl = gsap.timeline().pause();
    if (section.type === "circular") { 
      navSectionTl.set(wrapper.current, {
        width: section.size += 'rem',
        height: section.size,
        background: section.background,
        borderRadius: "50%",
        position:'absolute',
        border: section.border ? section.border : 'none',
      });
    }
    if (section.load === true) navSectionTl.play();
    return <div>This navigation type is unsupported.</div>;
  },[section]);
  return (<div ref={wrapper}></div>);
}
