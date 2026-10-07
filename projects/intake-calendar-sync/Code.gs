/**
 * Transaction Intake Form → Google Calendar sync
 *
 * Bound to the intake form's response spreadsheet. Every new form submission
 * creates one all-day calendar event per date field that was filled in.
 *
 * Reference implementation of the client build. Client-specific field names
 * and the calendar ID are replaced with generic examples.
 *
 * Setup:
 *   1. Open the response sheet → Extensions → Apps Script, paste this file.
 *   2. Set CALENDAR_ID and DATE_FIELDS to match the form.
 *   3. Run installTrigger() once and authorize.
 */

// The shared team calendar. Writing by ID means the script doesn't need to run
// under the client's own login.
const CALENDAR_ID = 'team-calendar-id@group.calendar.google.com';

// Form question titles that hold dates. Each filled-in one becomes an event.
const DATE_FIELDS = [
  'Contract Date',
  'Earnest Money Due',
  'Inspection Deadline',
  'Inspection Response Due',
  'Appraisal Deadline',
  'Financing Contingency',
  'Title Commitment Due',
  'Survey Deadline',
  'HOA Documents Due',
  'Final Walkthrough',
  'Closing Date',
  'Possession Date',
];

const ADDRESS_FIELD = 'Property Address';
const CLIENT_FIELD = 'Client Name';
const NOTES_FIELD = 'Notes';

/** Run once to install the on-submit trigger (and remove any stale ones). */
function installTrigger() {
  const ss = SpreadsheetApp.getActive();
  // A leftover trigger from an earlier test was firing alongside the real one
  // and causing partial runs. Clear every existing onFormSubmit trigger first.
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'onFormSubmit')
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('onFormSubmit').forSpreadsheet(ss).onFormSubmit().create();
}

function onFormSubmit(e) {
  const values = e.namedValues; // { 'Question title': ['answer'] }
  const get = key => (values[key] && values[key][0] ? String(values[key][0]).trim() : '');

  const address = get(ADDRESS_FIELD) || 'Transaction';
  const client = get(CLIENT_FIELD);
  const notes = get(NOTES_FIELD);
  const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
  if (!calendar) throw new Error('Calendar not found or not shared with the script owner: ' + CALENDAR_ID);

  let created = 0;
  const failed = [];

  DATE_FIELDS.forEach(field => {
    const raw = get(field);
    if (!raw) return; // skip blanks

    try {
      const date = new Date(raw);
      if (isNaN(date)) throw new Error('Unparseable date "' + raw + '"');

      const title = field + ': ' + address;
      const description = [
        client ? 'Client: ' + client : '',
        'Source: transaction intake form',
        notes ? '\nNotes:\n' + notes : '',
      ].filter(Boolean).join('\n');

      calendar.createAllDayEvent(title, date, { description: description });
      created++;
      Utilities.sleep(300); // short pause per event avoids rate-limit drops on 12-event submissions
    } catch (err) {
      // One bad field shouldn't stop the other events from being created.
      failed.push(field + ' (' + err.message + ')');
    }
  });

  console.log('Created ' + created + ' event(s).' + (failed.length ? ' Failed: ' + failed.join('; ') : ''));
}
