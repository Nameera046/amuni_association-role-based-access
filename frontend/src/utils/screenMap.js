import WebinarDashboard from '../components/WebinarDashboard';
import StudentRequestForm from '../components/webinar/StudentRequestForm';
import WebinarSpeakerAssignmentForm from '../components/webinar/WebinarSpeakerAssignmentForm';
import WebinarEvents from '../components/webinar/WebinarEvents';
import WebinarCompletedDetailsForm from '../components/webinar/WebinarCompletedDetailsForm';
import WebinarStudentFeedbackForm from '../components/webinar/WebinarStudentFeedbackForm';
import TopicApprovalForm from '../components/webinar/TopicApprovalForm';
import WebinarCircular from '../components/webinar/WebinarCircular';
import WebinarCertificate from '../components/webinar/WebinarCertificate';
import Adminpage from '../components/webinar/Adminpage';
// Add other webinar components as needed

// Name-to-ID mapping for readable URLs (kebab-case → numeric ID)
export const SCREEN_NAMES = {
  'webinar-dashboard': 1,
  'student-request-form': 2,
  'webinar-speaker-assignment': 3,
  'webinar-events': 4,
  'webinar-completed-details': 6,
  'webinar-student-feedback': 8,
  'topic-approval': 9,
  'webinar-circular': 10,
  'webinar-certificate': 11,
  'webinar-adminpage': 12,
  // Add more as needed
};

export const getScreenIdByName = (screenName) => {
  if (!screenName) return null;
  const normalized = screenName.toLowerCase().trim().replace(/[_ ]/g, '-');
  return SCREEN_NAMES[normalized] || null;
};

// RoleId to screen name mapping for admin navigation
export const ROLE_SCREEN_MAP = {
  2: 'student-request-form',      // Student Coordinator
  3: 'webinar-dashboard',         // Webinar Coordinator  
  7: 'dashboard',                 // Mentorship Coordinator (general dashboard)
  9: 'placement-dashboard',       // Placement Coordinator
  // Webinar screens from DB
  1: 'webinar-dashboard',
  2: 'student-request-form',
  3: 'speaker-assignment-form',
  4: 'webinar-events',
  6: 'webinar-completed-details-upload',
  8: 'student-feedback-form',
  9: 'topic-approval-form',
  10: 'webinar-circular',
  11: 'webinar-certificate',
  12: 'webinar-adminpage',
};

export const getScreenNameByRoleId = (roleId) => {
  return ROLE_SCREEN_MAP[roleId] || null;
};



export const SCREEN_COMPONENTS = {
  // Webinar screens - updated to use actual screenIds from DB table
  1: WebinarDashboard,    // Webinar Dashboard
  2: StudentRequestForm,  // Student Request Form  
  3: WebinarSpeakerAssignmentForm, // Speaker Assignment Form
  4: WebinarEvents,       // Webinar Events
  6: WebinarCompletedDetailsForm, // Webinar Completed Details Upload
  8: WebinarStudentFeedbackForm, // Student Feedback Form
  9: TopicApprovalForm,   // Topic Approval Form
  10: WebinarCircular,    // Webinar Circular
  11: WebinarCertificate, // Webinar Certificate
  12: Adminpage,          // Admin Page (Webinar)
  // Add more modules as needed
};

export const getScreenComponent = (screenId) => {
  return SCREEN_COMPONENTS[screenId];
};

export const WEBINAR_SCREEN_IDS = {
  DASHBOARD: 1,
  STUDENT_REQUEST: 2,
  SPEAKER_ASSIGNMENT: 3,
  EVENTS: 4,
  COMPLETED_DETAILS: 6,
  STUDENT_FEEDBACK: 8,
  TOPIC_APPROVAL: 9,
  CIRCULAR: 10,
  CERTIFICATE: 11,
  ADMIN: 12,
};

