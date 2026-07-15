"use client";

import { useState } from "react";
import styles from "./CTAAction.module.css";

export default function CTAAction() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    if (!usuario.trim()) {
      e.preventDefault();
      alert("O campo usuário é obrigatório");
      return;
    }
    if (!senha.trim()) {
      e.preventDefault();
      alert("O campo senha é obrigatório");
      return;
    }
    // Se ambos preenchidos, o form submete normalmente via action
  }

  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.textSide}>
          <h2 className={styles.title}>Consulte seus processos.</h2>
          <p className={styles.description}>
            Não perca nenhum detalhe da sua causa. Acesse o sistema de
            acompanhamento processual com suas credenciais. Caso não tenha login, entre em contato e solicite já o seu.
          
          </p>
        </div>

        <div className={styles.formSide}>
          <form
            id="frEntrar"
            name="frEntrar"
            action="https://www.integra.adv.br/moderno/include/logarSistema.asp?login=integra"
            target="_blank"
            method="post"
            onSubmit={handleSubmit}
            className={styles.loginForm}
          >
            <div className={styles.formTitle}>Controle de Processos</div>

            <div className={styles.fieldGroup}>
              <label htmlFor="campo_usuario_caixa_integra" className={styles.label}>
                Usuário
              </label>
              <input
                id="campo_usuario_caixa_integra"
                name="txtUsuario"
                type="text"
                className={styles.input}
                placeholder="Digite seu usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="campo_senha_caixa_integra" className={styles.label}>
                Senha
              </label>
              <input
                id="campo_senha_caixa_integra"
                name="txtSenha"
                type="password"
                className={styles.input}
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.ctaButton}>
              Entrar <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
