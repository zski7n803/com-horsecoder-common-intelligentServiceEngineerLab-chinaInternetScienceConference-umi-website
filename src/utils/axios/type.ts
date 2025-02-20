import type { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface StandardResponse<T = any> {
  // 请求结果
  result: boolean;
  // 响应消息/错误消息
  message?: string;
  // 请求路径
  path?: string;
  // 状态码
  status: number;
  // 时间戳
  timestamp: number;
  // 返回数据
  data: {
    // 实际内容
    value: T;
    // 总数
    count?: number;
  };
}

export type StandardPromise<T = any> = Promise<StandardResponse<T>>;

export interface StandardAxiosInstance extends AxiosInstance {
  (config: AxiosRequestConfig): StandardPromise;
  (url: string, config?: AxiosRequestConfig): StandardPromise;
}
