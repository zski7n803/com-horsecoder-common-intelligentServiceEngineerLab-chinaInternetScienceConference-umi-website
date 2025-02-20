import React from 'react';
import styles from './index.less';
import type { MeetingRegistrationProps } from './types';

/**
 * 组件布局: 会议注册
 */
const MeetingRegistrationPage: React.FC<MeetingRegistrationProps> = () => {

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
              {`会议注册`}
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

export default MeetingRegistrationPage;
