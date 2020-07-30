import React, { Fragment } from 'react';

import Wave from "../Wave";
import Logo from "../Logo";

export default function HolderFull() {
  return (
    <Fragment>
      <Wave thickness={12} scale={0.1} />
      <Logo full />
    </Fragment>
  );
}