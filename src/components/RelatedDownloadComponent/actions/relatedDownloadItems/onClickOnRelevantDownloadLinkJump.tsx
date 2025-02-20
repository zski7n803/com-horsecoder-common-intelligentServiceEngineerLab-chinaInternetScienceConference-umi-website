import React from 'react';
import type { Dispatch } from 'umi';
import {forwardRichTextDisplay} from "@/logic/forwards";

/**
 * 点击相关下载跳转
 * 唯一id: relatedDownloadComponent-onClickOnRelevantDownloadLinkJump
 */
export const onClickOnRelevantDownloadLinkJump = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  dispatch: Dispatch,
  entity: any,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
   forwardRichTextDisplay({ query: { id: entity?.content }});  /*
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
