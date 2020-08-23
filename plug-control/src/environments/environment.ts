// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyC9wVdYIr-BGNUiP3CmmjG0_RmBQpGVSDc",
    authDomain: "plug-control.firebaseapp.com",
    databaseURL: "https://plug-control.firebaseio.com",
    projectId: "plug-control",
    storageBucket: "plug-control.appspot.com",
    messagingSenderId: "1072507205102",
    appId: "1:1072507205102:web:09db924007dbd37d724aff",
    measurementId: "G-JR22TY0G4F"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
