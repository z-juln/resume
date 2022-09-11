import React from 'react';
import { Viewer } from '@bytemd/react';
import breaks from '@bytemd/plugin-breaks';
import frontmatter from '@bytemd/plugin-frontmatter';
import gemoji from '@bytemd/plugin-gemoji';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import math from '@bytemd/plugin-math';
import mediumZoom from '@bytemd/plugin-medium-zoom';
import mermaid from '@bytemd/plugin-mermaid';
import 'bytemd/dist/index.css';
import 'github-markdown-css';
import 'highlight.js/styles/vs.css';
import 'katex/dist/katex.css';

const plugins = [
  breaks(),
  frontmatter(),
  gemoji(),
  gfm(),
  highlight(),
  math(),
  mediumZoom(),
  mermaid(),
];

interface MarkdownViewerProps {
  className?: string;
  style?: React.CSSProperties;
  value: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({
  className,
  style = {},
  value,
}) => (
  <div className={className} style={style}>
    <Viewer plugins={plugins} value={value} />
  </div>
);

export default MarkdownViewer;
