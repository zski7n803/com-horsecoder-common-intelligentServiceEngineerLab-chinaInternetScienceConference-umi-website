import type { RichTextWebsite } from '@/types/com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.websiteInformation/sys/RichTextWebsite';

/**
 * 入参明细:
 * setter 页面设置器
 * richTextListForWebsites 网站富文本列表
 */
export interface FlowCodeSetMeetingNotificationListParams {
  setter: any;
  richTextListForWebsites: RichTextWebsite[];
}

/**
 * 出参明细:
 */
export interface FlowCodeSetMeetingNotificationListResults {
}

/**
 * 设置数据:会议通知列表
 * FLOW_NODE_SET_MEETING_NOTIFICATION_LIST
 * 唯一id: WebsiteHomepage/FLOW_CODE_SET_MEETING_NOTIFICATION_LIST
 */
export const flowCodeSetMeetingNotificationList = async (params: FlowCodeSetMeetingNotificationListParams): Promise<FlowCodeSetMeetingNotificationListResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { richTextListForWebsites } = params;
  setter.setMeetingNotificationList(richTextListForWebsites);
  // 结束流程
  return {}
};
