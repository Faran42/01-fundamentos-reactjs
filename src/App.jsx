import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <section>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Faran" content="Batata Prime from mother Lotus" />
          <Post author="Batata" content="Clem! Clem! Clem!" />
        </main>
      </div>
    </section>
  );
}

export default App;
