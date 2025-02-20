import { FlowConfig } from "./types";
export declare type StoreValue = {
    func: Function;
};
export declare const flowCodeStore: Map<string, StoreValue>;
export declare const flowDefStore: Map<string, FlowConfig>;
export declare const flowStopSignal: Map<string, any>;
