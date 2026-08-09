import styles from './styles.module.css';

type GerenicHtmlProps = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: GerenicHtmlProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
