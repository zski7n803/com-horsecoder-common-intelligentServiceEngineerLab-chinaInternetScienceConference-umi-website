import React from 'react';
import styles from './index.less';
import type { HotelTransportationProps } from './types';
import hotel from "@/assets/hotel.png";

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
                >
                  {`请参会人员自行提前预定酒店。组委会推荐武汉光谷潮漫凯瑞国际酒店（罗经理 17671437472）、全季酒店（武汉光谷创业街店）（周经理 18672376616）、武汉丽顿酒店（光谷店）（侯经理18907178850）和锦江都城酒店（武汉华科大光谷创业街店）（皮经理18872340613）4家酒店住宿。`}

                </p>

                <p
                  className={styles.divDiv0Div0Div0Div1P0}
                >
                  {`一、武汉光谷潮漫凯瑞国际酒店`}
                </p>
                <img
                  className={styles.divDiv0Div0Div0Div1Img1}
                  src={hotel}
                  alt=""
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
