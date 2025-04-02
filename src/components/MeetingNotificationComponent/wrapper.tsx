import React, { useMemo } from 'react';
import type { MeetingNotificationComponentWrapperProps } from './types';
import { eventsMeetingNoticeItem } from './actions';
import MeetingNotificationComponentComponent from './index';
import { useDispatch } from 'umi';


/**
 * 组件逻辑: 会议通知组件
 */
const MeetingNotificationComponentWrapper: React.FC<MeetingNotificationComponentWrapperProps> = (props) => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  const dispatch = useDispatch();
  // 内部数据: 会议通知列表单项(entity)
  const { entity } = props;
  // 内部数据: 索引(index)
  const { index } = props;
  const actions = {
    // 组件meetingNoticeItem事件响应触发的交互入口
    eventsMeetingNoticeItem: useMemo(() => eventsMeetingNoticeItem(dispatch, entity), [dispatch, entity]),
  };

  /*
   * end
   */

  /*
   * 获取父组件传值
   * 定义当前组件数据
   * 定义静态变量
   * 获取组件redux数据
   * 获取组件挂载模型数据
   * 获取组件挂载流程数据
   * 装配子组件数据
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  return (
    <MeetingNotificationComponentComponent 
      entity={entity}
      index={index}
      actions={actions}
    />
  );
};

export default MeetingNotificationComponentWrapper;
