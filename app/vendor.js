"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
require("@angular/platform-browser");
require("@angular/platform-browser-dynamic");
require("@angular/core");
require("@angular/common");
require("@angular/compiler");
require("@angular/forms");
require("@angular/http");
require("@angular/router");
require("@angular/upgrade/static");
// Vendors
// Examples: jQuery, Lodash, Bootstrap
// You can import js, ts, css, sass, ...
require("rxjs");
// Currently, lodash has import limitations.
// Affected versions: Typescript 2.2.1, lodash 4.17.4, and @types/lodash 4.14.53
// See accepted answer on http://stackoverflow.com/questions/34660265/importing-lodash-into-angular2-typescript-application
//import * as _ from 'lodash';  // TODO: Update this to be more modular whenever the limitation is fixed.
// Avoid lodash conflict with pre-existing Underscore '_' global.
//_.noConflict(); 
//# sourceMappingURL=vendor.js.map