import { TopBar } from "./Components/TopBar/TopBar"
import { Pane } from "./Components/Pane/Pane"
import { Group } from "./Components/Group/Group"

export function App() {
  return (
    <>
      <TopBar />
      <div id="main">
        <Pane label="New Group (Ctrl+G)" >
          <Group text="Udemy" colour="purple" />
          <Group text="Go" colour="blue" />
          <Group text="Vim" colour="green" />
          <Group text="Meli" colour="yellow" />
          <Group text="GitHub" colour="orange" />
          <Group text="Libre" colour="red" />
        </Pane>
        <Pane label="New Link (Ctrl+L)" />
        <Pane label="Dictionary" />
      </div>
    </>
  )
}
