import React, { useMemo, useEffect, useState } from 'react';
import type { WebsiteHomepageWrapperProps } from './types';
import { onInitializeMeetingNotificationList, onInitializeRelatedDownloadList } from './actions';
import type { Setter } from './setter';
import WebsiteHomepagePage from './index';
import { useDispatch } from 'umi';


/**
 * 组件逻辑: 网站首页
 */
const WebsiteHomepageWrapper: React.FC<WebsiteHomepageWrapperProps> = () => {
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
  // 列表控制数据: 会议通知列表(meetingNotificationList)
  const [meetingNotificationList, setMeetingNotificationList] = useState<any[]>([]);
  // 列表控制数据: 相关下载列表(relatedDownloadList)
  const [relatedDownloadList, setRelatedDownloadList] = useState<any[]>([]);
  const setter: Setter = useMemo(() => { return { setMeetingNotificationList, setRelatedDownloadList };}, []);

  // 组件meetingNotificationList数据变化触发的交互入口：初始化会议通知列表
  useEffect(() => onInitializeMeetingNotificationList(setter, dispatch), [setter, dispatch]);
  // 组件relatedDownloadList数据变化触发的交互入口：初始化相关下载列表
  useEffect(() => onInitializeRelatedDownloadList(setter, dispatch), [setter, dispatch]);


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
    <WebsiteHomepagePage 
      meetingNotificationList={meetingNotificationList}
      setMeetingNotificationList={setMeetingNotificationList}
      relatedDownloadList={relatedDownloadList}
      setRelatedDownloadList={setRelatedDownloadList}
    />
  );
};

export default WebsiteHomepageWrapper;
