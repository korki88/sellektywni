import React, { useState, useRef, useEffect } from "react";
import NavigationSection from "./NavigationSection";
import Color from "color";
import gsap from "gsap";

export default function Nav() {
  const wrapper = useRef(null);

  const baseSize = 55;
  const baseColor = Color.rgb(234, 248, 246);
  const sizes = [baseSize, baseSize * 0.8, baseSize * 0.6, baseSize * 0.4];
  const backgrounds = [
    baseColor.darken(0.1),
    baseColor.darken(0.2),
    baseColor.darken(0.3),
    baseColor.darken(0.4),
  ];
  const navSections = [
    {
      id: 1,
      name: "BaseOnSexCat",
      type: "circular",
      size: sizes[0],
      elements: "Tes obj 1",
      background: backgrounds[0],
      load: true,
    },
    {
      id: 2,
      name: "SettignsNav",
      type: "circular",
      size: sizes[1],
      elements: "Tes obj 2",
      background: backgrounds[1],
    },
    {
      id: 3,
      name: "MainNav",
      type: "circular",
      size: sizes[2],
      elements: "Tes obj 3",
      background: backgrounds[2],
      border: "1px solid white",
    },
    {
      id: 4,
      name: "BasketTab",
      type: "circular",
      size: sizes[3],
      elements: "Tes obj 4",
      background: backgrounds[3],
      border: "1px solid white",
    },
  ];
  const [sections, setSections] = useState(navSections);

  function ToogleSection(id) {
    const newSections = [sections];
    section = newSections.find((s) => s.id === id);
    section.load = !section.load;
    setSections(newSections);

    useEffect(() => {
      const navTl = gsap.timeline();
      navTl.set(wrapper.current, {
        width: "100%",
        display: "grid",
        placeItems: "center",
        position: "relative",
      });
    });
  }
  return (
    <div ref={wrapper}>
      {sections.map((section) => {
        return <NavigationSection key={section.id} section={section} id={section.name} />;
      })}
    </div>
  );
}
