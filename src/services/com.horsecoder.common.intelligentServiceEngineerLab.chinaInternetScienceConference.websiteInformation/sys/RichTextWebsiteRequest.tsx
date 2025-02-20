import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { RichTextWebsite } from '@/types/com.horsecoder.common.intelligentServiceEngineerLab.chinaInternetScienceConference.websiteInformation/sys/RichTextWebsite';

export interface RichTextWebsiteFilterMapper {
  id?: string;
  type?: string;
  typeIn?: string[];
  content?: string;
  title?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface RichTextWebsitePostMapper {
  type: string;
  content: string;
  title: string;
}

export interface RichTextWebsiteUpdateMapper {
  id: string;
  type?: string;
  content?: string;
  title?: string;
}

export const getRichTextWebsiteSimple = async (id: string): StandardPromise<RichTextWebsite> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website/single/simple', {
    params: { id },
  });
};

export const getRichTextWebsite = async (id: string): StandardPromise<RichTextWebsite> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website/single', {
    params: { id },
  });
};

export const getRichTextWebsiteList = async (params: RichTextWebsiteFilterMapper): StandardPromise<RichTextWebsite[]> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website/filter', { params });
};

export const getRichTextWebsiteDetailList = async (params: RichTextWebsiteFilterMapper): StandardPromise<RichTextWebsite[]> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website/filter/detail', { params });
};

export const postRichTextWebsite = async (params: RichTextWebsitePostMapper): StandardPromise<RichTextWebsite> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website', {
    method: 'POST',
    data: { ...params },
  });
};

export const postRichTextWebsiteBatch = async (params: RichTextWebsitePostMapper[]): StandardPromise<RichTextWebsite[]> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateRichTextWebsite = async (params: RichTextWebsiteUpdateMapper): StandardPromise<RichTextWebsite> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateRichTextWebsiteBatch = async (params: RichTextWebsiteUpdateMapper[]): StandardPromise<RichTextWebsite[]> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putRichTextWebsite = async (params: RichTextWebsiteUpdateMapper): StandardPromise<RichTextWebsite> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putRichTextWebsiteBatch = async (params: RichTextWebsiteUpdateMapper[]): StandardPromise<RichTextWebsite[]> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteRichTextWebsite = async (id: string): StandardPromise<number> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteRichTextWebsiteBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/chinaInternetScienceConference-websiteInformation/api/sys/rich/text/website/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
