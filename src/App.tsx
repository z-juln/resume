import React from "react";
import resumeRawMd from './resume.raw.md';
import MarkdownViewer from '@/components/markdown-viewer';
import styles from './style/index.module.less';

const getResumeMd = () => {
  let resumeMd = resumeRawMd;

  const now = new Date();

  // 工资
  if (now.getFullYear() === 2023 && now.getMonth() > 5) {
    resumeMd = resumeMd.replace('不小于12k/月', '不小于14k/月');
  } else if (now.getFullYear() > 2023) {
    resumeMd = resumeMd.replace('不小于12k/月', '不小于18k/月');
  }

  return resumeMd;
};

const resumeMd = getResumeMd();

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <MarkdownViewer className={styles['markdown-viewer']} value={resumeMd} />
    </div>
  );
};

export default App;
