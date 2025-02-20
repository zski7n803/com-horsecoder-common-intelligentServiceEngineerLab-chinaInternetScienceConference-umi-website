import React from 'react';
import styles from './index.less';
import type { ImportantDatesProps } from './types';

/**
 * 组件布局: 重要日期
 */
const ImportantDatesPage: React.FC<ImportantDatesProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <div
            className={styles.divDiv0Div0}
          >
            <h2
              className={styles.divDiv0Div0H20}
            >
              {`重要日期`}
            </h2>
            <div
              className={styles.divDiv0Div0Div1}
            >
              <p
                className={styles.divDiv0Div0Div1P0}
                content=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantDatesPage;
