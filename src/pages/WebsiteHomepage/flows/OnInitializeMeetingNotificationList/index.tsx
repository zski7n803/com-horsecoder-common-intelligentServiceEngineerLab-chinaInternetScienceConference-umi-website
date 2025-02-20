import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * setter 页面设置器
 */
export interface FlowOnInitializeMeetingNotificationListParams {
  dispatch: any;
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeMeetingNotificationListResults {
}

/**
 * 初始化会议通知列表
 * @com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.umi.website/websiteHomepage/FLOW_ON_INITIALIZE_MEETING_NOTIFICATION_LIST
 */
export const flowOnInitializeMeetingNotificationList = async (params: FlowOnInitializeMeetingNotificationListParams): Promise<FlowOnInitializeMeetingNotificationListResults> => {
  return run('@com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.umi.website/websiteHomepage/FLOW_ON_INITIALIZE_MEETING_NOTIFICATION_LIST', { ...params });
};
