import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Faran 42</strong>
              <time
                title="14 de setembro às 10:24h"
                dateTime="2023-09-14 10:24:00"
              >
                Cerca há 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
