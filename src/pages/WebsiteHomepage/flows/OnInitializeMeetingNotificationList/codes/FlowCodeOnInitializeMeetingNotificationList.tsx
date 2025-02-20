
/**
 * 入参明细:
 */
export interface FlowCodeOnInitializeMeetingNotificationListParams {
}

/**
 * 出参明细:
 * name 名称
 * type 类型
 */
export interface FlowCodeOnInitializeMeetingNotificationListResults {
  name?: string;
  type: string;
}

/**
 * 初始化会议通知列表
 * FLOW_NODE_ON_INITIALIZE_MEETING_NOTIFICATION_LIST
 * 唯一id: WebsiteHomepage/FLOW_CODE_ON_INITIALIZE_MEETING_NOTIFICATION_LIST
 */
export const flowCodeOnInitializeMeetingNotificationList = async (params: FlowCodeOnInitializeMeetingNotificationListParams): Promise<FlowCodeOnInitializeMeetingNotificationListResults> => {
  // 初始化流程出参
  let name;
  let type;
  // TODO：开始流程
  type="会议通知"

  // 结束流程
  return {
    name,
    type,
  }
};
