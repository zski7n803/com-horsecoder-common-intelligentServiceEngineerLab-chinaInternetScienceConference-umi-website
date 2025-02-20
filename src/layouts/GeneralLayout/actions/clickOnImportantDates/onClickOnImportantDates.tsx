import { forwardImportantDates } from '@/logic/forwards';
import React from 'react';
import type { Dispatch } from 'umi';

/**
 * 点击重要日期
 * 唯一id: generalLayout-onClickOnImportantDates
 */
export const onClickOnImportantDates = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  dispatch: Dispatch,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  forwardImportantDates();
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
};
