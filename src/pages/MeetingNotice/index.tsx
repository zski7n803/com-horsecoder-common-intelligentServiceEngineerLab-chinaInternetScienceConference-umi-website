import React from 'react';
import styles from './index.less';
import type { MeetingNoticeProps } from './types';

/**
 * 组件布局: 会议须知
 */
const MeetingNoticePage: React.FC<MeetingNoticeProps> = () => {

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
            {`会议须知`}
          </h2>
        </div>
        <div
          className={styles.divDiv1}
        >
          <p
            className={styles.divDiv1P0}
            content=""
          />
        </div>
      </div>
    </>
  );
};

export default MeetingNoticePage;
