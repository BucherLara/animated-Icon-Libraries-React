import React from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import lock from "react-useanimations/lib/lock";
import activity from "react-useanimations/lib/activity";

export default function UseAnimations() {
  return (
    <div className="wrap">
      <a
        href="https://github.com/useAnimations/react-useanimations"
        target="_blank"
      >
        <code>React UseAnimations Icons</code>
      </a>
      <div className="container">
        <UseAnimations animation={activity} size={56} />
        <UseAnimations animation={github} size={56} />
        <UseAnimations animation={lock} size={56} strokeColor="blue" />
      </div>
    </div>
  );
}
