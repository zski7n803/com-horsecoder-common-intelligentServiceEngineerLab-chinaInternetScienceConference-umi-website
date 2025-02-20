import React from 'react';
import styles from './index.less';
import type { OrganizeStructureProps } from './types';

/**
 * 组件布局: 组织结构
 */
const OrganizeStructurePage: React.FC<OrganizeStructureProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <h2
            className={styles.divDiv0H20}
          >
            {`会议注册`}
          </h2>
          <div
            className={styles.divDiv0Div1}
          >
            <p
              className={styles.divDiv0Div1P0}
              content=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizeStructurePage;
