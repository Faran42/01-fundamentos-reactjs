import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/faran42.png" />
          <div className={styles.authorInfo}>
            <strong>Faran 42</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime={Date()}>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder="Deixe um comentário" />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}></div>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
