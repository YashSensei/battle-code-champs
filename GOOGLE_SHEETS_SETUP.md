# Google Sheets Waitlist Integration Setup Guide

Follow these steps to connect your waitlist form to Google Sheets:

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Code Bets Waitlist" (or any name you prefer)
4. In the first row, add these column headers:
   - A1: `Email`
   - B1: `Timestamp`
   - C1: `Date Added`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` → `Apps Script`
2. Delete any existing code
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Add the data to the sheet
    sheet.appendRow([
      data.email,
      data.timestamp || new Date().toISOString(),
      new Date().toLocaleDateString(),
    ]);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Log the error
    console.error("Error:", error);

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        email: "test@example.com",
        timestamp: new Date().toISOString(),
      }),
    },
  };

  var result = doPost(testData);
  console.log(result.getContent());
}
```

4. Save the script (File → Save or Ctrl+S/Cmd+S)
5. Name it "Waitlist Handler" (or any name you prefer)

## Step 3: Deploy the Web App

1. In the Apps Script editor, click `Deploy` → `New deployment`
2. Click the gear icon next to "Select type" and choose `Web app`
3. Configure the deployment:
   - **Description**: "Waitlist Form Handler v1" (optional)
   - **Execute as**: Choose "Me" (your email)
   - **Who has access**: Choose "Anyone"
4. Click `Deploy`
5. You'll be asked to authorize the script:
   - Click `Authorize access`
   - Choose your Google account
   - Click `Advanced` → `Go to Waitlist Handler (unsafe)`
   - Click `Allow`
6. Copy the Web App URL that appears (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 4: Update Your React App

1. Open `/src/components/ComingSoonSection.tsx`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the Web App URL you copied

## Step 5: Test the Integration

1. Run your React app locally
2. Go to the Coming Soon section
3. Enter a test email and click "Join Waitlist"
4. Check your Google Sheet - the email should appear with a timestamp

## Troubleshooting

### If emails aren't appearing in the sheet:

1. **Check the browser console** for any errors
2. **Verify the URL** is correct and includes `/exec` at the end
3. **Test the Apps Script** directly:
   - In Apps Script editor, click `Run` → `testPost`
   - Check the execution log (View → Logs)
4. **Re-deploy if needed**:
   - Make any small change to the script
   - Deploy → Manage deployments → Edit → Version: New version → Deploy

### Security Notes

- The Google Apps Script runs under your Google account
- Anyone can submit to this endpoint (consider adding validation)
- For production, consider:
  - Adding rate limiting
  - Validating email format server-side
  - Adding a honeypot field to prevent spam
  - Using environment variables for the URL

## Optional: Environment Variable Setup

Instead of hardcoding the URL, use an environment variable:

1. Create a `.env` file in your project root:

   ```
   VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

2. Update the component:

   ```javascript
   const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || "";
   ```

3. Add `.env` to your `.gitignore` file

## Next Steps

- Monitor your Google Sheet regularly
- Export emails for marketing campaigns
- Set up email notifications when someone joins
- Add duplicate email prevention in the Apps Script
