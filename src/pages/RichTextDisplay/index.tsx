import React from 'react';
import styles from './index.less';
import type { RichTextDisplayProps } from './types';

/**
 * 组件布局: 富文本展示
 */
const RichTextDisplayPage: React.FC<RichTextDisplayProps> = (props) => {

  return (
    <>
      <div
        className={styles.richTextDisplay}
      >
        {props.richTextContent}
      </div>
    </>
  );
};

export default RichTextDisplayPage;
