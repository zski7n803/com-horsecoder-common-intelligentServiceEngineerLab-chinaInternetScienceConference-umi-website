import React from 'react';
import styles from './index.less';
import type { HotelTransportationProps } from './types';
import hotel from "@/assets/hotel.png";
import hotel2 from "@/assets/hotel2.png";
import hotel3 from "@/assets/hotel3.png";
import hotel4 from "@/assets/hotel4.png";
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
              <h1
                className={styles.divDiv0Div0Div0H20}
              >
                {`酒店交通`}
              </h1>
              <div
                className={styles.divDiv0Div0Div0Div1}
              >
                <p
                  className={styles.divDiv0Div0Div0Div1P0}
                >
                  {`请参会人员自行提前预定酒店。组委会推荐武汉光谷潮漫凯瑞国际酒店（罗经理 17671437472）、全季酒店（武汉光谷创业街店）（周经理 18672376616）、武汉丽顿酒店（光谷店）（侯经理18907178850）和锦江都城酒店（武汉华科大光谷创业街店）（皮经理18872340613）4家酒店住宿。`}

                </p>

                <p
                  className={styles.bigger_h2}
                >
                  {`一、武汉光谷潮漫凯瑞国际酒店（罗经理 17671437472）`}
                </p>
                <table>
                  <tbody>
                  <tr>
                    <th>商务单间</th>
                    <th>商务标间</th>
                    <th>豪华单间</th>
                    <th>豪华标间</th>
                  </tr>
                  <tr>
                    <td>380元/晚</td>
                    <td>380元/晚</td>
                    <td>420元/晚</td>
                    <td>420元/晚</td>
                  </tr>

                  </tbody>
                </table>
                <img
                  className={styles.divDiv0Div0Div0Div1Img1}
                  src={hotel}
                  alt=""
                />
                <p
                  className={styles.bigger_h2}
                >
                  {`二、全季酒店（武汉光谷创业街店）（周经理 18672376616）`}
                </p>
                <table>
                  <tbody>
                  <tr>
                    <th>商务单间</th>
                    <th>商务标间</th>
                  </tr>
                  <tr>
                    <td>380元/晚</td>
                    <td>420元/晚</td>
                  </tr>

                  </tbody>
                </table>
                <img
                  className={styles.divDiv0Div0Div0Div1Img1}
                  src={hotel2}
                  alt=""
                />
                <p
                  className={styles.bigger_h2}
                >
                  {`三、武汉丽顿酒店（光谷店）（侯经理18907178850）`}
                </p>
                <table>
                  <tbody>
                  <tr>
                    <th>商务单间</th>
                    <th>商务标间</th>
                  </tr>
                  <tr>
                    <td>350元/晚</td>
                    <td>350元/晚</td>
                  </tr>

                  </tbody>
                </table>
                <img
                  className={styles.divDiv0Div0Div0Div1Img1}
                  src={hotel4}
                  alt=""
                />
                <p
                  className={styles.bigger_h2}
                >
                  {`四、锦江都城酒店（武汉华科大光谷创业街店）（皮经理18872340613）`}
                </p>
                <table>
                  <tbody>
                  <tr>
                    <th>商务单间</th>
                    <th>商务标间</th>
                  </tr>
                  <tr>
                    <td>300元/晚</td>
                    <td>300元/晚</td>
                  </tr>

                  </tbody>
                </table>
                <img
                  className={styles.divDiv0Div0Div0Div1Img1}
                  src={hotel3}
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
