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
            <p
              className={styles.divDiv0Div0Div0Div0Div0Div1P15}
            >
              <b>会议报告投稿提交截止日期：<u><a style={{color: "red"}}> 2025 年 3 月 10 日 24 : 00</a></u><br/>
                报告接受以及参会通知日期：<u><a style={{color: "red"}}> 2025 年 3 月 23 日 24 : 00</a></u><br/>
                会议在线注册缴费截止日期：<u><a style={{color: "red"}}> 2025 年 4 月 5 日 24 : 00</a></u><br/></b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantDatesPage;
