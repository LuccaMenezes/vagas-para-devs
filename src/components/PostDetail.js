import { Link } from "react-router-dom";
import { AiFillDollarCircle } from 'react-icons/ai'

import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <h2>{post.title}</h2>
      <div className={styles.salario}>
        <AiFillDollarCircle /> 
        <p>{post.salario}</p>
      </div>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;