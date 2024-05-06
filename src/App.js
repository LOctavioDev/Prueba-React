import Img from "./components/Img";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import WidgetF from "./components/WidgetF";
import WidgetH from "./components/WidgetH";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Navbar />
        </header>
        <section className="main">
          <Img />
          <Post />
        </section>
        <aside>
          <WidgetH />
          <WidgetF />
        </aside>
        <footer className="footer">
          <p>Luis Octavio Lopez Martinez - © Todos los derechos reservados</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
