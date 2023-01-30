import React from "react";
import resumeRawMd from './resume.raw.md';
import MarkdownViewer from '@/components/markdown-viewer';
import styles from './style/index.module.less';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <MarkdownViewer className={styles['markdown-viewer']} value={resumeRawMd} />
    </div>
  );
};

export default App;
