import { FlowValue } from "./types";
export declare function checkAllArgs(paramsList: FlowValue[], initialArgs: Record<string, any>): Record<string, any>;
export declare const run: (flowId: string, initialArgs: any) => Promise<any>;
export declare const stop: (flowId: string, args: any) => Promise<any>;
