import React from 'react';
import styles from './index.less';
import type { RelatedDownloadComponentProps } from './types';

/**
 * 组件布局: 相关下载组件
 */
const RelatedDownloadComponentComponent: React.FC<RelatedDownloadComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.relatedDownloadItems}
        {...props.actions.eventsRelatedDownloadItems}
      >
        {props.entity?.title}
      </div>
    </>
  );
};

export default RelatedDownloadComponentComponent;
