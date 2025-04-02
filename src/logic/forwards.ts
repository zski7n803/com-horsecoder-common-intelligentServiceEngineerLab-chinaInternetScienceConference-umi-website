import { history } from 'umi';

type Query = Record<string, string | string[] | null>;
type State = Record<string, unknown>;

export const forward_ = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/", ...params});
};

export const forwardWebsiteHomepage = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/website/homepage", ...params});
};

export const forwardRichTextDisplay = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/rich/text/display", ...params});
};

export const forwardOrganizeStructure = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/organize/structure", ...params});
};

export const forwardHotelTransportation = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/hotel/transportation", ...params});
};

export const forwardImportantDates = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/important/dates", ...params});
};

export const forwardMeetingRegistration = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/meeting/registration", ...params});
};

export const forwardConferenceSubmission = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/conference/submission", ...params});
};
export const forwardConferenceSubmissionSecond = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/conference/second-submission", ...params});
};
export const forwardMeetingAgenda = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/meeting/agenda", ...params});
};

export const forwardMeetingNotice = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/meeting/notice", ...params});
};

export const forwardConferenceReport = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/conference/report", ...params});
};

