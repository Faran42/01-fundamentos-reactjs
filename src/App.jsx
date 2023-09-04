import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";

function App() {
  return (
    <section>
      <Header />
      <Post author="Faran" content="Batata Prime from mother Lotus" />
      <Post author="Batata" content="Clem! Clem! Clem!" />
    </section>
  );
}

export default App;
