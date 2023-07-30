import { TopBar } from "./Components/TopBar/TopBar"
import { Pane } from "./Components/Pane/Pane"

export function App() {
  return (
    <>
    <TopBar />
    <div id="main">
      <Pane />
      <Pane />
      <Pane />
    </div>
    </>
  )
}
