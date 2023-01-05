import React, { useEffect, useRef } from "react";
import "./transition.scss";

import { gsap } from "gsap";
import { useGlobalContext } from "../Context";

export const Transition = () => {
  const boxRefs = useRef([]);

  const { setTransition, transition } = useGlobalContext();

  useEffect(() => {
    const tl2 = gsap.timeline();

    tl2.to(boxRefs.current, {
      height: "100%",
      stagger: 0.5,
      
    })
    .to(boxRefs.current,{
      height:"0%",
      stagger:0.2,
      delay:0.4,
      onComplete(){
        setTransition(false)
      }
    })

  }, [transition]);

  return (
    <>
      <section className="transition">
        {[0, 1, 2, 3].map((i) => {
          return (
            <div
              key={i}
              ref={(elem) => boxRefs.current.push(elem)}
              className="box"
            ></div>
          );
        })}
      </section>
    </>
  );
};
