import * as googleApis from 'googleapis';
const Oauth2 = googleApis.auth.OAuth2;
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from './credentials';

const oauth2Client = new Oauth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];
 
const url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token) 
  scope: scopes // If you only need one scope you can pass it as string 
});

console.log(url);