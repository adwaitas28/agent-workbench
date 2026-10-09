/**
 * Agent Workbench — attendee check-in collector.
 *
 * Paste this into a Google Sheet's Apps Script editor
 * (Extensions → Apps Script), then deploy it as a web app.
 * Full steps are in README.md.
 */

const SHEET_NAME = 'Attendees';

function doPost(e) {
  const sheet = getSheet_();
  let data = {};
  try {
    data = JSON.parse(e.postData.contents || '{}');
  } catch (err) {
    return text_('bad request');
  }
  const name = clean_(data.name);
  const position = clean_(data.position);
  if (!name || !position) return text_('missing fields');

  sheet.appendRow([new Date(), name, position, clean_(data.event)]);
  return text_('ok');
}

// Lets you check the deployment by opening the URL in a browser.
function doGet() {
  return text_('Agent Workbench check-in is running.');
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Checked in', 'Name', 'Position', 'Event']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Trims, limits length, and stops text from being treated as a formula.
function clean_(value) {
  let s = String(value == null ? '' : value).trim().slice(0, 80);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function text_(s) {
  return ContentService.createTextOutput(s).setMimeType(ContentService.MimeType.TEXT);
}
