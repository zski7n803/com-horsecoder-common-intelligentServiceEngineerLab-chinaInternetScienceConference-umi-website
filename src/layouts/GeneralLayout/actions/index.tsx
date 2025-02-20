import { eventsClickOnHomepageTag } from './clickOnHomepageTag';
import type { EventsClickOnHomepageTag } from './clickOnHomepageTag';
import { eventsClickOnHomepage } from './clickOnHomepage';
import type { EventsClickOnHomepage } from './clickOnHomepage';
import { eventsClickOnConferenceReport } from './clickOnConferenceReport';
import type { EventsClickOnConferenceReport } from './clickOnConferenceReport';
import { eventsClickOnMeetingNotice } from './clickOnMeetingNotice';
import type { EventsClickOnMeetingNotice } from './clickOnMeetingNotice';
import { eventsClickOnMeetingAgenda } from './clickOnMeetingAgenda';
import type { EventsClickOnMeetingAgenda } from './clickOnMeetingAgenda';
import { eventsClickOnConferenceSubmission } from './clickOnConferenceSubmission';
import type { EventsClickOnConferenceSubmission } from './clickOnConferenceSubmission';
import { eventsClickOnMeetingRegistration } from './clickOnMeetingRegistration';
import type { EventsClickOnMeetingRegistration } from './clickOnMeetingRegistration';
import { eventsClickOnImportantDates } from './clickOnImportantDates';
import type { EventsClickOnImportantDates } from './clickOnImportantDates';
import { eventsClickOnHotelTransportation } from './clickOnHotelTransportation';
import type { EventsClickOnHotelTransportation } from './clickOnHotelTransportation';

export type Actions = {
  eventsClickOnHomepageTag: EventsClickOnHomepageTag;
  eventsClickOnHomepage: EventsClickOnHomepage;
  eventsClickOnConferenceReport: EventsClickOnConferenceReport;
  eventsClickOnMeetingNotice: EventsClickOnMeetingNotice;
  eventsClickOnMeetingAgenda: EventsClickOnMeetingAgenda;
  eventsClickOnConferenceSubmission: EventsClickOnConferenceSubmission;
  eventsClickOnMeetingRegistration: EventsClickOnMeetingRegistration;
  eventsClickOnImportantDates: EventsClickOnImportantDates;
  eventsClickOnHotelTransportation: EventsClickOnHotelTransportation;
};

export {
  eventsClickOnHomepageTag,
  eventsClickOnHomepage,
  eventsClickOnConferenceReport,
  eventsClickOnMeetingNotice,
  eventsClickOnMeetingAgenda,
  eventsClickOnConferenceSubmission,
  eventsClickOnMeetingRegistration,
  eventsClickOnImportantDates,
  eventsClickOnHotelTransportation,
};
