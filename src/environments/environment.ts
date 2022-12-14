// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:'https://weatherapi-com.p.rapidapi.com',
  XRapidAPIKeyLabel : 'X-RapidAPI-Key',
  XRapidAPIKeyValue : '0164d90b69msh555b6812b9a2c33p115dd9jsna9f8a8cd916b',
  XRapidAPIHostLabel : 'X-RapidAPI-Host',
  XRapidAPIHostValue : 'weatherapi-com.p.rapidapi.com',
  // firebase config
  firebaseConfig : {
    apiKey: "AIzaSyBza9CTBUF8o5zjNkvcYEDJ-p_Pks_cFqI",
    authDomain: "miniprojects-affbd.firebaseapp.com",
    projectId: "miniprojects-affbd",
    storageBucket: "miniprojects-affbd.appspot.com",
    messagingSenderId: "540024936053",
    appId: "1:540024936053:web:506ec8269a71b1ad2f8a3c",
    measurementId: "G-TMVHGWSKYK"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
