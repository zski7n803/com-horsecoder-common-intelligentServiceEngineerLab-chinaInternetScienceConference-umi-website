import React from 'react';
import styles from './index.less';
import type { MeetingNotificationComponentProps } from './types';

/**
 * 组件布局: 会议通知组件
 */
const MeetingNotificationComponentComponent: React.FC<MeetingNotificationComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.meetingNoticeItem}
        {...props.actions.eventsMeetingNoticeItem}
      >
        {props.entity?.title}
      </div>
    </>
  );
};

export default MeetingNotificationComponentComponent;
