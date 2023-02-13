# Getting Started with DashBoard App
This is a Dashboard App that provides you basic but very core info like local weather forecast,
and active users on your Projects linked to your Analytics accounts. 
This project is backwards compatible, so if you haven't migrated your project to GA4 you still can use it.

## Required:
* A Google Ananlytics account 
* A Project linked to Google Analytics account in order to obtain it's data
* A Google Authentication Client ID 

To get the project up and running follow these steps.

## Step 1 — create a new project 

(try the upper-left corner pulldown menu)**https://console.cloud.google.com/

## Step 2 — create credentials for this new project: 
https://console.cloud.google.com/apis/

First … you need a OAuth 2.0 client ID, so hit the blue “create credentials” button and create one for “web application”

And second, we need to ensure your dev and LIVE domains can access this project. Under “Authorised JavaScript origins”, lets add your local dev and live domains (e.g. http://localhost, http://emptycan.com, etc).

ALSO MAKE SURE: That when creating Oauth2 you enable the "Analytics Read.Only" scope in the scopes section.

## Step 3 — Enable the API for this project.

From the main API dashboard for your project… click “Enable APIS and Services”.

You need to “enable” “Analytics Data API” (not the Google Analytics API… confusing, yes, but ignore that one).

## Step 5 — The Google Analytics viewID / GA4 ID

#### For UA:
This one is easy… sign into your Google Analytics account and go to the Admin area. Find the property that you’re interested in streaming real-time data (middle column). In the subsequent far-right column, title “View”… click on “View Settings”. At the top, you’ll see the view ID. Copy that somewhere for later.
#### For GA4:
sign into your Google Analytics account and go to the Admin area. Find the property that you’re interested in streaming real-time data (middle column). In the subsequent middle column, title "Property Settings" click on the copy button next to your ID or copy it manually, whichever suits you. 

## Step 6 — Change your Client ID 

Every analytics account has a unique client ID, you also need  to add your Client ID to the app in order for it to authenticate
that the right user is accesing it. You can obtain the Client ID via Step 2, once you have the Client ID, go to src/components/websitedata.jsx and replace the clientId="XXX" to what your client ID is.

## Step 7 — Your local weather forecast

In order for the weather widget for you to show your local weather forecast go to src/components/weather.jsx and in line 13,
change the city name from XXX to your local city name.

## Step 8 — Update and run

Once all of the steps above have been succesful, open the project folder in a terminal, hit "npm install" and then "npm run start". The project should launch in your localhost and show you active users if you put the correct credentials in the correct field and login with the account that your Googlr account has been linked to


FUNCTIONING DEMO AT
https://headline-interactive-dboard.netlify.app/