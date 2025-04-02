import React, { useMemo } from 'react';
import type { GeneralLayoutWrapperProps } from './types';
import { eventsClickOnHomepageTag, eventsClickOnHomepage, eventsClickOnConferenceReport, eventsClickOnMeetingNotice, eventsClickOnMeetingAgenda, eventsClickOnConferenceSubmission, eventsClickOnMeetingRegistration, eventsClickOnImportantDates, eventsClickOnHotelTransportation } from './actions';
import GeneralLayoutLayout from './index';
import { useDispatch } from 'umi';


/**
 * 组件逻辑: 通用布局
 */
const GeneralLayoutWrapper: React.FC<GeneralLayoutWrapperProps> = (props) => {
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
  // 内部数据: 传递子节点(children)
  const { children } = props;
  const actions = {
    // 组件clickOnHomepageTag事件响应触发的交互入口
    eventsClickOnHomepageTag: useMemo(() => eventsClickOnHomepageTag(dispatch), [dispatch]),
    // 组件clickOnHomepage事件响应触发的交互入口
    eventsClickOnHomepage: useMemo(() => eventsClickOnHomepage(dispatch), [dispatch]),
    // 组件clickOnConferenceReport事件响应触发的交互入口
    eventsClickOnConferenceReport: useMemo(() => eventsClickOnConferenceReport(dispatch), [dispatch]),
    // 组件clickOnMeetingNotice事件响应触发的交互入口
    eventsClickOnMeetingNotice: useMemo(() => eventsClickOnMeetingNotice(dispatch), [dispatch]),
    // 组件clickOnMeetingAgenda事件响应触发的交互入口
    eventsClickOnMeetingAgenda: useMemo(() => eventsClickOnMeetingAgenda(dispatch), [dispatch]),
    // 组件clickOnConferenceSubmission事件响应触发的交互入口
    eventsClickOnConferenceSubmission: useMemo(() => eventsClickOnConferenceSubmission(dispatch), [dispatch]),
    // 组件clickOnMeetingRegistration事件响应触发的交互入口
    eventsClickOnMeetingRegistration: useMemo(() => eventsClickOnMeetingRegistration(dispatch), [dispatch]),
    // 组件clickOnImportantDates事件响应触发的交互入口
    eventsClickOnImportantDates: useMemo(() => eventsClickOnImportantDates(dispatch), [dispatch]),
    // 组件clickOnHotelTransportation事件响应触发的交互入口
    eventsClickOnHotelTransportation: useMemo(() => eventsClickOnHotelTransportation(dispatch), [dispatch]),
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
    <GeneralLayoutLayout 
      children={children}
      actions={actions}
    />
  );
};

export default GeneralLayoutWrapper;
