import React, { useEffect, useRef } from "react";
import page3 from "/page3.png";
import { motion, useAnimation } from "framer-motion";

export default function PageThree() {
  const animationControls = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationControls.visible && sectionControls.start("visible");
          } else {
            animationControls.hidden && sectionControls.start("hidden");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sectionControls = useAnimation();

  return (
    <div
      className="relative h-[800px] "
      style={{ overflow: "hidden" }}
      ref={sectionRef}
    >
      <img src={page3} alt="bg img" className="absolute w-full" style={{ zIndex: 1 }} />

      <motion.div
        initial="hidden"
        animate={sectionControls}
        exit="hidden"
        variants={animationControls}
        transition={{ duration: 0.5 }}
        className="absolute mt-20"
        style={{ zIndex: 2, top: "20%", left: "10%" }}
      >
        <p
          style={{
            fontSize: "5vw",
            fontWeight: "600",
            lineHeight: "70px",
            textAlign: "center",
          }}
        >
          Wanna
        </p>
        <p style={{ fontSize: "5vw", fontWeight: "600", lineHeight: "70px" }}>
          Contribute to
        </p>
        <p
          style={{
            fontSize: "5vw",
            fontWeight: "600",
            lineHeight: "70px",
            textAlign: "center",
          }}
        >
          BeatBridge?
        </p>
        <div
          className="absolute"
          style={{
            zIndex: 2,
            backgroundColor: "#FFFFFF00",
            border: "2px solid black",
            textAlign: "center",
            bottom: "-80%",
            width: "25vw",
            height: "70px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/pooranjoyb/BeatBridge"
            style={{ fontSize: "1.2vw", fontWeight: "600" }}
          >
            github.com/pooranjoyb/BeatBridge
          </a>
        </div>
      </motion.div>
    </div>
  );
}
