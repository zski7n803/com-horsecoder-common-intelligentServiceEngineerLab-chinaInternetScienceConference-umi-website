import type { ConferenceReportModelState } from '@/pages/ConferenceReport/models/types';
import type { GeneralLayoutModelState } from '@/models/GeneralLayout/types';
import type { OrganizeStructureModelState } from '@/pages/OrganizeStructure/models/types';
import type { ConferenceSubmissionModelState } from '@/pages/ConferenceSubmission/models/types';
import type { MeetingNoticeModelState } from '@/pages/MeetingNotice/models/types';
import type { ImportantDatesModelState } from '@/pages/ImportantDates/models/types';
import type { RelatedDownloadComponentModelState } from '@/models/RelatedDownloadComponent/types';
import type { HotelTransportationModelState } from '@/pages/HotelTransportation/models/types';
import type { MeetingAgendaModelState } from '@/pages/MeetingAgenda/models/types';
import type { RichTextDisplayModelState } from '@/pages/RichTextDisplay/models/types';
import type { WebsiteHomepageModelState } from '@/pages/WebsiteHomepage/models/types';
import type { MeetingRegistrationModelState } from '@/pages/MeetingRegistration/models/types';
import type { MeetingNotificationComponentModelState } from '@/models/MeetingNotificationComponent/types';

export type ComponentState = {
  RelatedDownloadComponent: RelatedDownloadComponentModelState,
  MeetingNotificationComponent: MeetingNotificationComponentModelState,
};

export type LayoutState = {
  GeneralLayout: GeneralLayoutModelState,
};

export type PageState = {
  ConferenceReport: ConferenceReportModelState,
  OrganizeStructure: OrganizeStructureModelState,
  ConferenceSubmission: ConferenceSubmissionModelState,
  MeetingNotice: MeetingNoticeModelState,
  ImportantDates: ImportantDatesModelState,
  HotelTransportation: HotelTransportationModelState,
  MeetingAgenda: MeetingAgendaModelState,
  RichTextDisplay: RichTextDisplayModelState,
  WebsiteHomepage: WebsiteHomepageModelState,
  MeetingRegistration: MeetingRegistrationModelState,
};
