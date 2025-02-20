import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { RichTextWebsite } from '@/types/com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.websiteInformation/sys/RichTextWebsite';

/**
 * 入参明细:
 * type 类型
 * name 名称
 */
export interface FlowFilterWebsiteRichTextListByTypeParams {
  type: string;
  name?: string;
}

/**
 * 出参明细:
 * richTextListForWebsites 网站富文本列表
 */
export interface FlowFilterWebsiteRichTextListByTypeResults {
  richTextListForWebsites: RichTextWebsite[];
}

/**
 * 按类型筛选网站富文本列表
 * @com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.websiteInformation/FLOW_FILTER_WEBSITE_RICH_TEXT_LIST_BY_TYPE
 */
export const flowFilterWebsiteRichTextListByType = async (params: FlowFilterWebsiteRichTextListByTypeParams): StandardPromise<FlowFilterWebsiteRichTextListByTypeResults> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.websiteInformation/FLOW_FILTER_WEBSITE_RICH_TEXT_LIST_BY_TYPE',
      params: { ...params },
    },
  });
};


export const flowFilterWebsiteRichTextListByTypeFacade = async (params: FlowFilterWebsiteRichTextListByTypeParams): Promise<FlowFilterWebsiteRichTextListByTypeResults> => {
  const { data: { value } } =  await flowFilterWebsiteRichTextListByType(params);
  return value;
};