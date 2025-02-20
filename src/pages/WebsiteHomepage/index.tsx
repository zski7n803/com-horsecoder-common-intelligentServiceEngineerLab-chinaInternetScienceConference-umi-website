import React from 'react';
import notice from '@/assets/notice.png';
import MeetingNotificationComponentWrapper from '@/components/MeetingNotificationComponent/wrapper';
import download from '@/assets/download.png';
import RelatedDownloadComponentWrapper from '@/components/RelatedDownloadComponent/wrapper';
import styles from './index.less';
import type { WebsiteHomepageProps } from './types';

/**
 * 组件布局: 网站首页
 */
const WebsiteHomepagePage: React.FC<WebsiteHomepageProps> = (props) => {

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
                  <img
                    className={styles.divDiv0Div0Div0Div0Div0Img0}
                    src={notice}
                    alt=""
                  />
                </div>
                <div
                  className={styles.divDiv0Div0Div0Div0Div1}
                >
                  <h2
                    className={styles.divDiv0Div0Div0Div0Div1H20}
                  >
                    {`会议通知`}
                  </h2>
                </div>
              </div>
              <div
                className={styles.divDiv0Div0Div0Div1}
              >
                { props.meetingNotificationList.map((entity, index) => (<MeetingNotificationComponentWrapper
                  entity={entity}
                  index={index}
                />))}
              </div>
            </div>
          </div>
          <div
            className={styles.divDiv0Div1}
          >
            <div
              className={styles.divDiv0Div1Div0}
            >
              <div
                className={styles.divDiv0Div1Div0Div0}
              >
                <img
                  className={styles.divDiv0Div1Div0Div0Img0}
                  src={download}
                  alt=""
                />
                <div
                  className={styles.divDiv0Div1Div0Div0Div1}
                >
                  <h2
                    className={styles.divDiv0Div1Div0Div0Div1H20}
                  >
                    {`相关下载`}
                  </h2>
                </div>
              </div>
              <div
                className={styles.divDiv0Div1Div0Div1}
              >
                { props.relatedDownloadList.map((entity, index) => (<RelatedDownloadComponentWrapper
                  entity={entity}
                  index={index}
                />))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteHomepagePage;
