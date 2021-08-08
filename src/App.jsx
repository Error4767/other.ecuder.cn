import classes from "./App.module.css";

import Menu from "@/components/content/Menu/Menu.jsx";

import { createSignal } from "solid-js";

export default () => {
  const [showURI, setShowURI] = createSignal("");
  return (
    <div class={classes.container}>
      <Menu handler={uri=> setShowURI(uri || null)}></Menu>
      <iframe src={showURI()} class={classes.show}>saddsa</iframe>
    </div>
  )
}