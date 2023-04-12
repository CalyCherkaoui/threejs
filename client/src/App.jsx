import CanvasModel from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
function App() {
  return (
    <main className="app transition-all ease-in">
      {/* <div className="head-text">Threejs</div> */}
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  )
}

export default App
