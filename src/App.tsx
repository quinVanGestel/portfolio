// import { useState } from "react";
import type { ReactNode } from "react";
import "./App.css";

export default function App(): ReactNode {
  return <section>
    {placeholder()}
  </section>;
}

function placeholder(): React.JSX.Element {
  return <div>Hi, I'm a placeholder! :3</div>;
}
