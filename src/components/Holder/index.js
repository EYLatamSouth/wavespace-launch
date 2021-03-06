import React, { Fragment } from 'react';

import Wave from "../Wave";
import Logo from "../Logo";

export default function Holder() {
  return (
    <Fragment>
      <Wave thickness={14} scale={0.1} />
      <Logo />
    </Fragment>
  );
}