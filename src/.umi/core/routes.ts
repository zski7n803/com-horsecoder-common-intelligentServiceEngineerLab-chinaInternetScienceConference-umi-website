// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/zski7n803/javapros/com-horsecoder-common-intelligentServiceEngineerLab-chinaInternetScienceConference-umi-website/node_modules/.pnpm/@umijs+runtime@3.4.1_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__GeneralLayout__wrapper' */'@/layouts/GeneralLayout/wrapper'), loading: LoadingComponent}),
    "name": "",
    "path": "/",
    "routes": [
      {
        "path": "/",
        "redirect": "/website/homepage",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__WebsiteHomepage__wrapper' */'@/pages/WebsiteHomepage/wrapper'), loading: LoadingComponent}),
        "name": "website.homepage",
        "path": "/website/homepage",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__RichTextDisplay__wrapper' */'@/pages/RichTextDisplay/wrapper'), loading: LoadingComponent}),
        "name": "rich.text.display",
        "path": "/rich/text/display",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__OrganizeStructure__wrapper' */'@/pages/OrganizeStructure/wrapper'), loading: LoadingComponent}),
        "name": "organize.structure",
        "path": "/organize/structure",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__HotelTransportation__wrapper' */'@/pages/HotelTransportation/wrapper'), loading: LoadingComponent}),
        "name": "hotel.transportation",
        "path": "/hotel/transportation",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ImportantDates__wrapper' */'@/pages/ImportantDates/wrapper'), loading: LoadingComponent}),
        "name": "important.dates",
        "path": "/important/dates",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__MeetingRegistration__wrapper' */'@/pages/MeetingRegistration/wrapper'), loading: LoadingComponent}),
        "name": "meeting.registration",
        "path": "/meeting/registration",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ConferenceSubmission__wrapper' */'@/pages/ConferenceSubmission/wrapper'), loading: LoadingComponent}),
        "name": "conference.submission",
        "path": "/conference/submission",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__MeetingAgenda__wrapper' */'@/pages/MeetingAgenda/wrapper'), loading: LoadingComponent}),
        "name": "meeting.agenda",
        "path": "/meeting/agenda",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__MeetingNotice__wrapper' */'@/pages/MeetingNotice/wrapper'), loading: LoadingComponent}),
        "name": "meeting.notice",
        "path": "/meeting/notice",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ConferenceReport__wrapper' */'@/pages/ConferenceReport/wrapper'), loading: LoadingComponent}),
        "name": "conference.report",
        "path": "/conference/report",
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
