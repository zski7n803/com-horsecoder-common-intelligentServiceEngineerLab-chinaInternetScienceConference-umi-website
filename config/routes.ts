﻿export default [
  	{
  		'component':'@/layouts/GeneralLayout/wrapper',
  		'name':'',
  		'path':'/',
  		'routes':[
        {
          'path': '/', // 匹配根路径
          'redirect': '/website/homepage' // 重定向到目标路径
        },
  			{
  				'component':'@/pages/WebsiteHomepage/wrapper',
  				'name':'website.homepage',
  				'path':'/website/homepage'
  			},
  			{
  				'component':'@/pages/RichTextDisplay/wrapper',
  				'name':'rich.text.display',
  				'path':'/rich/text/display'
  			},
  			{
  				'component':'@/pages/OrganizeStructure/wrapper',
  				'name':'organize.structure',
  				'path':'/organize/structure'
  			},
  			{
  				'component':'@/pages/HotelTransportation/wrapper',
  				'name':'hotel.transportation',
  				'path':'/hotel/transportation'
  			},
  			{
  				'component':'@/pages/ImportantDates/wrapper',
  				'name':'important.dates',
  				'path':'/important/dates'
  			},
  			{
  				'component':'@/pages/MeetingRegistration/wrapper',
  				'name':'meeting.registration',
  				'path':'/meeting/registration'
  			},
  			{
  				'component':'@/pages/ConferenceSubmission/wrapper',
  				'name':'conference.submission',
  				'path':'/conference/submission'
  			},
        {
          'component':'@/pages/ConferenceSubmissionSecond/wrapper',
          'name':'conference.second-submission',
          'path':'/conference/second-submission'
        },
  			{
  				'component':'@/pages/MeetingAgenda/wrapper',
  				'name':'meeting.agenda',
  				'path':'/meeting/agenda'
  			},
  			{
  				'component':'@/pages/MeetingNotice/wrapper',
  				'name':'meeting.notice',
  				'path':'/meeting/notice'
  			},
  			{
  				'component':'@/pages/ConferenceReport/wrapper',
  				'name':'conference.report',
  				'path':'/conference/report'
  			}
  		]
  	}
  ]
