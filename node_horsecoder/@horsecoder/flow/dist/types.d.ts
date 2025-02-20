export interface FlowValue {
    name: string;
    type: string;
    title?: string;
    notnull?: boolean;
    scope?: string;
    defaultValue?: string;
}
export interface FlowNode {
    id: string;
    type: string;
    title: string;
    reference: string;
    params: FlowValue[];
    results?: FlowValue[];
}
export interface FlowRoute {
    source: string | 'start';
    target: string | 'end';
}
export interface FlowConfig extends Omit<FlowNode, 'reference'> {
    type: string | "flow";
    platform: string | "frontend";
    async: boolean;
    nodes: FlowNode[];
    routes: FlowRoute[];
}
