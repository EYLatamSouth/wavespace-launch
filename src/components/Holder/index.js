import React, { Component } from 'react';

import Wave2 from "../Wave2";
import Logo from "../Logo";

export default function Holder() {
  return (
    <div>
      <Wave2
        thickness={14}
        scale={0.1}
      />
      <Logo />
    </div>
  );
}