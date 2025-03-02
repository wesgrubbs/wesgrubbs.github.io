// analytics.js - Centralized analytics tracking functions

/**
 * Track a user event in Google Analytics
 * @param {string} eventName - Name of the event (e.g., 'project_view', 'external_link_click')
 * @param {object} params - Event parameters (category, label, etc.)
 */
export const trackEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag("event", eventName, params);
  } else {
    console.warn(
      "Google Analytics not loaded, unable to track event:",
      eventName
    );
  }
};

/**
 * Track a project view (when a user opens a project detail)
 * @param {object} project - The project object being viewed
 * @param {string} projectType - Either 'work' or 'play'
 */
export const trackProjectView = (project, projectType) => {
  trackEvent("project_view", {
    event_category: projectType,
    event_label: project.title,
    project_id: project.id,
  });
};

/**
 * Track an external link click
 * @param {object} project - The project object containing the link
 * @param {string} projectType - Either 'work' or 'play'
 * @param {string} url - The URL being clicked
 */
export const trackExternalLinkClick = (project, projectType, url) => {
  trackEvent("external_link_click", {
    event_category: projectType,
    event_label: project.title,
    url: url,
  });
};

/**
 * Track navigation between sections
 * @param {string} fromSection - Section user navigated from
 * @param {string} toSection - Section user navigated to
 */
export const trackNavigation = (fromSection, toSection) => {
  trackEvent("navigation", {
    event_category: "section_change",
    event_label: `${fromSection} to ${toSection}`,
  });
};

export default {
  trackEvent,
  trackProjectView,
  trackExternalLinkClick,
  trackNavigation,
};
