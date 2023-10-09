import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import ModalManager from "./components/util/ModalManager";
function App() {
  return (
    <div>
      <ModalManager />
      <Header />
      <Content />
    </div>
  );
}

export default App;
