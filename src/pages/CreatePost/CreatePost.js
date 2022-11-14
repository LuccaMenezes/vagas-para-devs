import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [requisitos, setRequisitos] = useState("");
  const [atividades, setAtividades] = useState("");
  const [senioridade, setSenioridade] = useState("");
  const [trabalho, setTrabalho] = useState("");
  const [salario, setSalario] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !requisitos || !tags || !atividades || !senioridade || !salario || !trabalho) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

    console.log({
      title,
      requisitos,
      atividades,
      senioridade,
      salario,
      trabalho,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return

    insertDocument({
      title,
      requisitos,
      atividades,
      senioridade,
      salario,
      trabalho,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate("/");
  };

  return (
    <div className={styles.create_post}>
      <h2>Dados da Vaga</h2>
      <p>Conte-nos um pouco mais sobre a vaga!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Cargo:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Qual o cargo para essa vaga?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>       
        <label>
          <span>Requisitos:</span>
          <textarea
            name="requisitos"
            required
            placeholder="Quais os requisitos para essa vaga?"
            onChange={(e) => setRequisitos(e.target.value)}
            value={requisitos}
          ></textarea>
        </label>
        <label>
          <span>Tecnologias Necessárias:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tecnologias necessárias separadas por vírgula."
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <label>
          <span>Atividades:</span>
          <textarea
            name="atividades"
            required
            placeholder="Quais as atividades que seram exercidas?"
            onChange={(e) => setAtividades(e.target.value)}
            value={atividades}
          ></textarea>
        </label>
        <label>
          <span>Senioridade:</span>
          <textarea
            name="senioridade"
            required
            placeholder="Qual a senioridade para essa vaga?"
            onChange={(e) => setSenioridade(e.target.value)}
            value={senioridade}
          ></textarea>
        </label>
        <label>
          <span>Salário:</span>
          <textarea
            name="salario"
            required
            placeholder="Informe o salário da vaga."
            onChange={(e) => setSalario(e.target.value)}
            value={salario}
          ></textarea>
        </label>
        <label>
          <span>Modelo de Trabalho:</span>
          <textarea
            name="trabalho"
            required
            placeholder="Informe o modelo de trabalho."
            onChange={(e) => setTrabalho(e.target.value)}
            value={trabalho}
          ></textarea>
        </label>
        {!response.loading && <button className="btn">Publicar Vaga!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  );
};

export default CreatePost;