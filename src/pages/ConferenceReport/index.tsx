import React from 'react';
import styles from './index.less';
import type { ConferenceReportProps } from './types';

/**
 * 组件布局: 大会报告
 */
const ConferenceReportPage: React.FC<ConferenceReportProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <h2
            className={styles.divDiv0H20}
          >
            {`TBD`}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ConferenceReportPage;
