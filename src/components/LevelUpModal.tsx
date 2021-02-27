import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>
          2<strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>
          <button type="button" onClick={() => {}}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </header>
      </div>
    </div>
  );
}

export default LevelUpModal;
