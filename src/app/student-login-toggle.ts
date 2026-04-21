/**
 * Toggle the Bootstrap 3 top login strip (#navbarHeader).
 * Uses the `.in` class (BS3) — no jQuery required, so it still works if `assets/jquery` fails to load.
 */
export function toggleStudentLoginPanel(event: Event): void {
  event.preventDefault();
  event.stopPropagation();
  const el = document.getElementById('navbarHeader');
  if (!el) {
    return;
  }
  el.classList.toggle('in');
  const open = el.classList.contains('in');
  const trigger = event.currentTarget as HTMLElement | null;
  if (trigger) {
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
}
