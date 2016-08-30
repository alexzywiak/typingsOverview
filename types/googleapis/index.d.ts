declare module 'googleapis' {

    interface UrlOptions {
        access_type: string;
        scope: string[];
    }

    interface Oauth2Client {
        generateAuthUrl(opts: UrlOptions): string;
    }

    interface Oauth2Constructor {
        new (GoogleClientId: string, GoogleClientSecret: string, GoogleCallbackUri: string): Oauth2Client;
    }
    
    interface GoogleApi {
        auth: {
            OAuth2: Oauth2Constructor;
        };
    }

    const GoogleApi: GoogleApi;

    export = GoogleApi;
}