// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/compiler';
import '@angular/forms';
import '@angular/http';
import '@angular/router';
import '@angular/upgrade/static';


// Vendors
// Examples: jQuery, Lodash, Bootstrap
// You can import js, ts, css, sass, ...
import 'rxjs';

// Currently, lodash has import limitations.
// Affected versions: Typescript 2.2.1, lodash 4.17.4, and @types/lodash 4.14.53
// See accepted answer on http://stackoverflow.com/questions/34660265/importing-lodash-into-angular2-typescript-application
//import * as _ from 'lodash';  // TODO: Update this to be more modular whenever the limitation is fixed.


// Avoid lodash conflict with pre-existing Underscore '_' global.
//_.noConflict();