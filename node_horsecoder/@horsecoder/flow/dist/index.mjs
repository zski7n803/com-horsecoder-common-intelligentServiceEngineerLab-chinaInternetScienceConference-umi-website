// src/store.ts
var flowCodeStore = /* @__PURE__ */ new Map();
var flowDefStore = /* @__PURE__ */ new Map();
var flowStopSignal = /* @__PURE__ */ new Map();

// src/execute.ts
async function execute(flowRef, ...args) {
  const flowValue = flowCodeStore.get(flowRef);
  if (!flowValue) {
    throw new Error(`\u6CA1\u6709\u8FD9\u4E2A\u65B9\u6CD5:${flowRef}`);
  }
  return await flowValue.func(...args);
}

// src/register.ts
function register(flowCodeId, func) {
  if (flowCodeStore.get(flowCodeId)) {
    throw new Error("\u6CE8\u518C\u4E86\u540C\u540D\u65B9\u6CD5: " + flowCodeId);
  }
  flowCodeStore.set(flowCodeId, { func });
}
function load(flowId, json) {
  if (flowDefStore.get(flowId)) {
    throw new Error(`\u5B58\u5728\u591A\u4E2Aid\u4E3A${flowId}\u7684\u6D41\u7A0B`);
  }
  flowDefStore.set(flowId, JSON.parse(JSON.stringify(json)));
}

// src/common.ts
function getFlowValueType(type) {
  switch (type) {
    case "string":
    case "number":
    case "boolean":
    case "any":
      return type;
    default:
      return "any";
  }
}

// src/flow.ts
function pickValue(obj, flowValues) {
  if (typeof obj !== "object") {
    return null;
  }
  if (!flowValues) {
    return null;
  }
  let result = {};
  flowValues.forEach((flowValue) => {
    if (typeof obj[flowValue.name] !== "undefined") {
      result[flowValue.name] = obj[flowValue.name];
    }
  });
  return result;
}
function checkAllArgs(paramsList, initialArgs) {
  let args = {};
  paramsList == null ? void 0 : paramsList.forEach((paramsValue) => {
    const { type, name, defaultValue } = paramsValue;
    const typeValueInFlow = getFlowValueType(type);
    const typeInArg = typeof initialArgs[name];
    if (initialArgs[name] === void 0 && paramsValue.notnull) {
      console.warn(`\u627E\u4E0D\u5230\u53C2\u6570${name},\u4F46\u5728\u6D41\u7A0B\u4E2D\u5B9A\u4E49\u4E86`);
      args[name] = defaultValue || void 0;
    } else {
      if (typeValueInFlow !== "any" && typeInArg !== typeValueInFlow) {
        console.warn(`\u53C2\u6570${name}\u5B9A\u4E49\u4E3A${type}\u7C7B\u578B\uFF0C\u4F46\u5B9E\u9645\u662F${typeInArg}\u7C7B\u578B`);
      }
      args[name] = initialArgs[name];
    }
  });
  return args;
}
var runNode = async (route, flowNodeMap, args) => {
  if (route.target === "end") {
    return args;
  }
  const flowNode = flowNodeMap.get(route.target);
  if (!flowNode) {
    console.warn(`\u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u6D41\u7A0B\u8282\u70B9${route.target}`);
    return args;
  }
  if (flowNode.type === "event") {
    const eventResults = await execute(flowNode.reference, pickValue(args, flowNode.params));
    args = { ...args, ...pickValue(eventResults, flowNode.results) };
  } else if (flowNode.type === "flow") {
    const flowResults = await run(flowNode.reference, args);
    args = { ...args, ...flowResults };
  }
  return args;
};
var run = async (flowId, initialArgs) => {
  const flowConfig = flowDefStore.get(flowId);
  if (!flowConfig) {
    throw new Error(`\u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u6D41\u7A0B\u7247\u6BB5${flowId}`);
  }
  let args = checkAllArgs(flowConfig.params, { ...initialArgs });
  const flowNodeMap = /* @__PURE__ */ new Map();
  flowConfig.nodes.forEach((node) => {
    flowNodeMap.set(node.id, node);
  });
  const routeSourceMap = {};
  const routeNodeIdMap = {};
  flowConfig.routes.forEach((route) => {
    if (!routeSourceMap[route.source])
      routeSourceMap[route.source] = [];
    routeSourceMap[route.source].push(route);
    routeNodeIdMap[route.source] = route.source;
    routeNodeIdMap[route.target] = route.target;
  });
  const routeLayers = [];
  let currentRouteLayer = routeSourceMap.start;
  if (!currentRouteLayer)
    return;
  routeLayers.push(currentRouteLayer);
  while (currentRouteLayer.length > 0) {
    let routeList = [];
    currentRouteLayer.forEach((route) => {
      routeList = [...routeList, ...routeSourceMap[route.target] ? routeSourceMap[route.target] : []];
    });
    currentRouteLayer = routeList;
    if (currentRouteLayer.length > 0)
      routeLayers.push(currentRouteLayer);
  }
  let stopSignal = false;
  for (let i = 0; i < routeLayers.length; i += 1) {
    if (stopSignal)
      break;
    const layer = routeLayers[i];
    for (let j = 0; j < layer.length; j += 1) {
      if (stopSignal)
        break;
      const route = layer[j];
      const result = await runNode(route, flowNodeMap, args);
      if (flowStopSignal.get(flowId)) {
        stopSignal = true;
        args = { ...args, ...flowStopSignal.get(flowId) };
        flowStopSignal.delete(flowId);
      }
      args = { ...args, ...result };
    }
  }
  return pickValue(args, flowConfig.results);
};
var stop = async (flowId, args) => {
  flowStopSignal.set(flowId, args);
};
export {
  execute,
  load,
  register,
  run,
  stop
};
//# sourceMappingURL=index.mjs.map