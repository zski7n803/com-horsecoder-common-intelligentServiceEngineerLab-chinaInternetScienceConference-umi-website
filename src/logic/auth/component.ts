const check_ = (): boolean => {
  return true || false;
};

const checkWebsiteHomepage = (): boolean => {
  return true || false;
};

const checkRichTextDisplay = (): boolean => {
  return true || false;
};

const checkOrganizeStructure = (): boolean => {
  return true || false;
};

const checkHotelTransportation = (): boolean => {
  return true || false;
};

const checkImportantDates = (): boolean => {
  return true || false;
};

const checkMeetingRegistration = (): boolean => {
  return true || false;
};

const checkConferenceSubmission = (): boolean => {
  return true || false;
};

const checkMeetingAgenda = (): boolean => {
  return true || false;
};

const checkMeetingNotice = (): boolean => {
  return true || false;
};

const checkConferenceReport = (): boolean => {
  return true || false;
};

export const checkAllPath = (path: string, record: Record<string, boolean>): boolean => {
  switch(path){
    case '/': return check_()
    case '/website/homepage': return checkWebsiteHomepage()
    case '/rich/text/display': return checkRichTextDisplay()
    case '/organize/structure': return checkOrganizeStructure()
    case '/hotel/transportation': return checkHotelTransportation()
    case '/important/dates': return checkImportantDates()
    case '/meeting/registration': return checkMeetingRegistration()
    case '/conference/submission': return checkConferenceSubmission()
    case '/meeting/agenda': return checkMeetingAgenda()
    case '/meeting/notice': return checkMeetingNotice()
    case '/conference/report': return checkConferenceReport()
    default: return !!!record;
  }
  return false;
};