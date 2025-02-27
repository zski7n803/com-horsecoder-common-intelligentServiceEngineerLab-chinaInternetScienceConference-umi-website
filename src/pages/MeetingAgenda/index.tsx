import React from 'react';
import styles from './index.less';
import type { MeetingAgendaProps } from './types';

/**
 * 组件布局: 会议议程
 */
const MeetingAgendaPage: React.FC<MeetingAgendaProps> = () => {

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
            <div
              className={styles.divDiv0Div0Div0}
            >
              <div
                className={styles.divDiv0Div0Div0Div0}
              >
                <div
                  className={styles.divDiv0Div0Div0Div0Div0}
                >
                  <h2
                    className={styles.divDiv0Div0Div0Div0Div0H20}
                  >
                    {`TBD`}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingAgendaPage;
