// CSS
import styles from "./Post.module.css";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <h3>Requisitos:</h3>
          <p>{post.requisitos}</p>
          <h3>Atividades:</h3>
          <p>{post.atividades}</p>
          <h3>Senioridade:</h3>
          <p>{post.senioridade}</p>
          <h3>Salário:</h3>
          <p>{post.salario}</p>
          <h3>Tecnologias Necessárias:</h3>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <p key={tag}>
                <span className="btn btn-outline-tags">
                  {tag}
                </span>
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;