/* eslint-disable no-alert */
import React from "react";

export const SuperButton = () => (
  <button
    type="button"
    onClick={() => alert(`Hi`)}
  >
    Click me
  </button>
);
