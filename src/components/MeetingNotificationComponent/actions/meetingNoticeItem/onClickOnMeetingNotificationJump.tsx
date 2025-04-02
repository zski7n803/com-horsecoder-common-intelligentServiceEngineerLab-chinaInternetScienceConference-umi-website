// import { forwardRichTextDisplay } from '@/logic/forwards';
import React from 'react';
import type { Dispatch } from 'umi';
/**
 * 点击会议通知跳转
 * 唯一id: meetingNotificationComponent-onClickOnMeetingNotificationJump
 */
export const onClickOnMeetingNotificationJump = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  dispatch: Dispatch,
  entity: any,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */

   window.location.href='http://cnsf2025.whu.edu.cn/#/'+entity?.content;

  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
};
