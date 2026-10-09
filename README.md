# Agent Workbench

A hands-on, no-code workshop for the Agent Up conference. Attendees check in with their name and position, then build "Scout", an event-planning AI agent, across five exercises: prompts, a job description, a skill, tools, and guardrails.

All of Scout's answers are **simulated by scripted rules in the page**. No AI model, API key or account is needed, and nothing costs money. The answers still react to what attendees type, so editing a rule or a budget changes the result.

## Files

| File | What it is |
|---|---|
| `index.html` | Check-in page: name and position |
| `workshop.html` | The five exercises and the starter kit |
| `config.js` | Event name and the optional Google Sheet link |
| `apps-script/Code.gs` | Optional collector that saves check-ins to your Google Sheet |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Publish on GitHub Pages

1. Create a new public repository named `agent-workbench` under your account.
2. On the repository page, choose **Add file → Upload files**, drag in every file and folder from this package, and commit.
3. Open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, and save.
4. After a minute or two the site is live at `https://adwaitas28.github.io/agent-workbench/`.

## Collect attendee names (optional)

Without this step, names stay in each attendee's own browser and are only used to personalise the workshop.

1. Create a Google Sheet, for example "Agent Up check-ins".
2. In the sheet, open **Extensions → Apps Script**. Replace the editor's contents with `apps-script/Code.gs` and save.
3. Choose **Deploy → New deployment**, pick the type **Web app**, set **Execute as** to **Me** and **Who has access** to **Anyone**, then deploy and approve the permissions.
4. Copy the web app URL (it ends in `/exec`). Open it in a browser once; you should see "Agent Workbench check-in is running."
5. Paste the URL into `config.js` as `sheetUrl`, then commit the change on GitHub.

Each check-in adds a row to the **Attendees** tab: time, name, position, and event.

Note: anyone who has the web app URL can add rows, so keep the sheet for attendance only.

## Before the workshop

- Check in once yourself and click through all five exercises.
- Exercise 2: delete the "Never book" rule and run the request to see Scout slip, then use **Restore rules**.
- Exercise 5: try each tricky request with and without the matching rule.
- The venue and calendar data is made up for practice. Edit `VENUES` and `CALENDAR` near the top of the script in `workshop.html` to change it.

## Reset for a new attendee on a shared laptop

Use **Not you? Change details** in the sidebar, or clear the site's data in the browser.
