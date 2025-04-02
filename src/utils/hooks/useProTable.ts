import { useCallback } from 'react';
import { message } from 'antd';
import type { RequestData, ProColumns } from '@ant-design/pro-table';
import type { SortOrder } from 'antd/lib/table/interface';
import type { StandardPromise } from '../axios';

export function useProTable<T = any>(
  getModel: (params: any) => StandardPromise<T[]>,
  columns: ProColumns<T>[],
  limitParams?: any,
) {
  const requestFunc = useCallback<(
    params: T & {
      pageSize?: number;
      current?: number;
      keyword?: string;
    },
    sort: Record<string, SortOrder>
  ) => Promise<RequestData<T>>>(async (params, sort) => {
    // 初始化排序参数
    let orderBy = Object.keys(sort).map((key) => `${key} ${sort[key] === 'ascend' ? 'asc' : 'desc'}`)
    orderBy = orderBy.length > 0 ? orderBy : limitParams?.orderBy

    // 初始化默认参数
    const { current, pageSize, ...rest } = params;
    const data = await getModel({ ...rest, ...limitParams, orderBy, page: current, rows: pageSize || 10 });

    // 返回值
    return {
      data: data && data.data && data.data.value ? data.data.value : [],
      total: data && data.data && data.data.count ? data.data.count : 0,
      success: data && data.result,
    };
  }, [limitParams, getModel]);
  const onRequestError = useCallback(e => {
    console.error(e);
    message.error(e.data.message || '请求出错');
  }, []);
  const beforeSearchSubmit = useCallback(
    params => {
      const data = {};
      Object.keys(params).forEach(key => {
        const item = params[key];
        const target = columns.find(column => column.dataIndex === key);
        const isDate = ['date', 'dateRange', 'dateTime', 'dateTimeRange'].some(
          type => type === target?.valueType,
        );
        if (Array.isArray(item)) {
          if (isDate) {
            data[`${key}From`] = new Date(item[0]).valueOf();
            data[`${key}To`] = new Date(item[1]).valueOf();
          } else {
            data[`${key}From`] = item[0];
            data[`${key}To`] = item[1];
          }
        } else if (item !== undefined && item !== '') {
          data[key] = isDate ? new Date(item).valueOf() : item;
        }
      });
      return data;
    },
    [columns],
  );
  return {
    request: requestFunc,
    onRequestError,
    beforeSearchSubmit,
  };
}
