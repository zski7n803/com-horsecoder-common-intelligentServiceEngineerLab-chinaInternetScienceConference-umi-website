import React from 'react';
import styles from './index.less';
import type { HotelTransportationProps } from './types';

/**
 * 组件布局: 酒店交通
 */
const HotelTransportationPage: React.FC<HotelTransportationProps> = () => {

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
              <h2
                className={styles.divDiv0Div0Div0H20}
              >
                {`酒店交通`}
              </h2>
              <div
                className={styles.divDiv0Div0Div0Div1}
              >
                <p
                  className={styles.divDiv0Div0Div0Div1P0}
                  content=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelTransportationPage;
