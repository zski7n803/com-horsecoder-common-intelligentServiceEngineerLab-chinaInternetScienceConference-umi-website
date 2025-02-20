import React from 'react';
import logo from '@/assets/logo.png';
import conferenceLogo from '@/assets/conferenceLogo.png';
import styles from './index.less';
import type { GeneralLayoutProps } from './types';

/**
 * 组件布局: 通用布局
 */
const GeneralLayoutPage: React.FC<GeneralLayoutProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <img
            className={styles.divDiv0Img0}
            src={logo}
            alt=""
          />
          <div
            className={styles.clickOnHomepageTag}
            {...props.actions.eventsClickOnHomepageTag}
          >
            {`首页`}
          </div>
          <div
            className={styles.clickOnHomepage}
            {...props.actions.eventsClickOnHomepage}
          >
            {`组织结构`}
          </div>
          <div
            className={styles.clickOnConferenceReport}
            {...props.actions.eventsClickOnConferenceReport}
          >
            {`大会报告`}
          </div>
          <div
            className={styles.clickOnMeetingNotice}
            {...props.actions.eventsClickOnMeetingNotice}
          >
            {`会议须知`}
          </div>
          <div
            className={styles.clickOnMeetingAgenda}
            {...props.actions.eventsClickOnMeetingAgenda}
          >
            {`会议议程`}
          </div>
          <div
            className={styles.clickOnConferenceSubmission}
            {...props.actions.eventsClickOnConferenceSubmission}
          >
            {`会议投稿`}
          </div>
          <div
            className={styles.clickOnMeetingRegistration}
            {...props.actions.eventsClickOnMeetingRegistration}
          >
            {`会议注册`}
          </div>
          <div
            className={styles.clickOnImportantDates}
            {...props.actions.eventsClickOnImportantDates}
          >
            {`重要日期`}
          </div>
          <div
            className={styles.clickOnHotelTransportation}
            {...props.actions.eventsClickOnHotelTransportation}
          >
            {`酒店交通`}
          </div>
        </div>
        <div
          className={styles.divDiv1}
        >
          <img
            className={styles.divDiv1Img0}
            src={conferenceLogo}
            alt=""
          />
        </div>
        <div
          className={styles.divDiv2}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

export default GeneralLayoutPage;
