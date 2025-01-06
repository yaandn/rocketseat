import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setlikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleSetLikePost() {
    setlikeCount((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/yaandn.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yan Di Nápoli</strong>
              <time
                dateTime="2025-03-01 08:12:30"
                title="01 de Março às 08:12h"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleSetLikePost}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
