/**
 * Career Configuration & Transition Manager
 * Handles dynamic content switching for Jay Prajapati's new role at The Hidi Group.
 * Automatic transition date: November 16, 2026.
 * Preview override: append `?preview=hidi` or `?preview=pre-hidi` to the URL.
 */

export const HIDI_START_DATE = new Date('2026-11-16T00:00:00');

export const isHidiActive = () => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (params.get('preview') === 'hidi') return true;
    if (params.get('preview') === 'pre-hidi') return false;
  }
  return new Date() >= HIDI_START_DATE;
};
