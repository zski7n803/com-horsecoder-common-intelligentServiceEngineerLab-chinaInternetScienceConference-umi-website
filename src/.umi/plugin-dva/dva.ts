// @ts-nocheck
import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
// @ts-ignore
import createLoading from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/node_modules/.pnpm/dva-loading@3.0.25_dva-core@2.0.4_redux@4.2.1_/node_modules/dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';
import ModelReducer0 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/models/GeneralLayout/reducer.tsx';
import ModelReducer1 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/models/MeetingNotificationComponent/reducer.tsx';
import ModelReducer2 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/models/RelatedDownloadComponent/reducer.tsx';
import ModelReducer3 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/ConferenceReport/models/reducer.tsx';
import ModelReducer4 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/ConferenceSubmission/models/reducer.tsx';
import ModelReducer5 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/ConferenceSubmissionSecond/models/reducer.tsx';
import ModelReducer6 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/HotelTransportation/models/reducer.tsx';
import ModelReducer7 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/ImportantDates/models/reducer.tsx';
import ModelReducer8 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/MeetingAgenda/models/reducer.tsx';
import ModelReducer9 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/MeetingNotice/models/reducer.tsx';
import ModelReducer10 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/MeetingRegistration/models/reducer.tsx';
import ModelReducer11 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/OrganizeStructure/models/reducer.tsx';
import ModelReducer12 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/RichTextDisplay/models/reducer.tsx';
import ModelReducer13 from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/src/pages/WebsiteHomepage/models/reducer.tsx';

let app:any = null;

export function _onCreate(options = {}) {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(typeof window !== 'undefined' && window.g_useSSR ? { initialState: window.g_initialProps } : {}),
    ...(options || {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach((plugin:any) => {
    app.use(plugin);
  });
  app.model({ namespace: 'reducer', ...ModelReducer0 });
app.model({ namespace: 'reducer', ...ModelReducer1 });
app.model({ namespace: 'reducer', ...ModelReducer2 });
app.model({ namespace: 'reducer', ...ModelReducer3 });
app.model({ namespace: 'reducer', ...ModelReducer4 });
app.model({ namespace: 'reducer', ...ModelReducer5 });
app.model({ namespace: 'reducer', ...ModelReducer6 });
app.model({ namespace: 'reducer', ...ModelReducer7 });
app.model({ namespace: 'reducer', ...ModelReducer8 });
app.model({ namespace: 'reducer', ...ModelReducer9 });
app.model({ namespace: 'reducer', ...ModelReducer10 });
app.model({ namespace: 'reducer', ...ModelReducer11 });
app.model({ namespace: 'reducer', ...ModelReducer12 });
app.model({ namespace: 'reducer', ...ModelReducer13 });
  return app;
}

export function getApp() {
  return app;
}

/**
 * whether browser env
 * 
 * @returns boolean
 */
function isBrowser(): boolean {
  return typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    // run only in client, avoid override server _onCreate()
    if (isBrowser()) {
      _onCreate()
    }
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model:any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    let app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
