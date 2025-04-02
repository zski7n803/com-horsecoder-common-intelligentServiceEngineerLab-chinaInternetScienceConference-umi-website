import React from 'react';
import logo from '@/assets/logo.png';
import conferenceLogo from '@/assets/conferenceLogo.png';
import styles from './index2.less';
import type { GeneralLayoutProps } from './types';
import qRCode from '@/assets/qRCode.png';

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

<div className={styles.header}>            
          <img
            className={styles.divDiv0Img0}
            src={logo}
            alt=""
          />
          <div className={styles.header_left}>
                <div className={styles.header_title}>第二十一届网络科学与工程论坛</div>
          </div>
</div>

<div className={styles.navDiv}>
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


<div className={styles.navDiv2}>
  <div className={styles.navDiv22}>
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

        <div className={styles.footer}>
        <div className={styles.footer_content}>
            <div className={styles.footer_left}>
                <div className={styles.footer_title}>第二十一届网络科学与工程论坛</div>
                <div className={styles.footer_subtitle}>The 21th Networks Science & Technology Forum in 2025</div>
            </div>
            <div className={styles.footer_middle}>
                <img className={styles.qr_code} src={qRCode} alt="报名二维码"/>
                <div className={styles.contact_item}><span>参会回执二维码</span></div>
            </div>
            <div className={styles.footer_divider}/>
            <div className={styles.footer_right}>
                <div className={styles.footer_right_up}>
                    <span>联系方式</span>
                </div>

                <div className={styles.footer_bottom}>
                    <div className={styles.footer_contact}>
                        <div className={styles.contact_item}>
                            <span>白老师</span><br/>手机 18181984809  微信 yyw_55255
                        </div>
                        <div className={styles.contact_item}>
                            <span>田老师</span><br/>手机 15271177770  微信 15271177770
                        </div>
                        <div className={styles.contact_item}>
                            <span>会务邮箱</span><br/>cnetsci2025@163.com
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>



    <div className={styles.footer2}>
        <div className={styles.footer2_content}>
            <div className={styles.footer2_left}>
                <div className={styles.footer2_title}>第二十一届网络科学与工程论坛</div>
                <div className={styles.footer2_subtitle}>The 21th Networks Science & Technology Forum in 2025</div>
            </div>

<div className={styles.footer2_bottom}>

            <div className={styles.footer2_middle}>
                <div className={styles.qr2_code_text}><span>回执二维码</span></div>
                <img className={styles.qr2_code} src={qRCode} alt="报名二维码"/>
                
            </div>

            <div className={styles.footer2_right}>
                <div className={styles.footer2_right_up}>
                    <span>联系方式</span>
                </div>

                <div className={styles.footer2_bottom}>
                    <div className={styles.footer2_contact}>
                        <div className={styles.contact2_item}>
                            <span>白老师: </span><br/>手机 18181984809  微信 yyw_55255
                        </div>
                        <div className={styles.contact2_item}>
                            <span>田老师: </span><br/>手机 15271177770  微信 15271177770
                        </div>
                        <div className={styles.contact2_item}>
                            <span>会务邮箱: </span>cnetsci2025@163.com
                        </div>

                    </div>
                </div>

            </div>
</div>
        </div>

    </div>




      </div>



    </>
  );
};

export default GeneralLayoutPage;
