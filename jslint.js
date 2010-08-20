// (C) Daniel Lopretto (http://daniellopretto.com) 
// License: WTFPL, http://sam.zoy.org/wtfpl/ 
//
// This program is free software. It comes without any warranty, to the
// extent permitted by applicable law. You can redistribute it and/or
// modify it under the terms of the Do What The Fuck You Want To Public
// License, Version 2, as published by Sam Hocevar. See
// http://sam.zoy.org/wtfpl/COPYING for more details.

/*jslint white: true, browser: true, devel: true, onevar: true, undef: true, 
    nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, 
    newcap: true, immed: true, strict: true,
    adsafe:false, safe: false, */
/*global JSLINT, window */
/*members
    createElement, setAttribute, body, appendChild, white, fragment, 
    undef, nomen, eqeqeq, plusplus, bitwise, regexp, newcap, immed, 
    documentElement, innerHTML, errors, length, log, line, character, 
    onevar, strict, reason, */

"use strict";

(function () {
    var lint, run_lint;

    // Including the minified version of jslint from jslint.com, you can
    // find preformance boost by downloading jslint.js and including
    // your local copy instead.
    lint = document.createElement('script');
    lint.setAttribute('src', 'http://www.jslint.com/webjslint.js');
    document.body.appendChild(lint);

    run_lint = (function () {
        var e, i, success, 
            lint_options = {
                white: true,
                fragment: true,
                onevar: true,
                undef: true,
                nomen: true,
                eqeqeq: true,
                plusplus: true,
                bitwise: true,
                regexp: true,
                newcap: true,
                immed: true,
                strict: true
            };

        if (typeof JSLINT === 'function') {
            success = JSLINT(document.documentElement.innerHTML, lint_options);
            if (!success) {
                for (i = 0; i < JSLINT.errors.length; i += 1) {
                    e = JSLINT.errors[i];
                    if (e) {
                        console.log("line: " + e.line + ":" + e.character + ": " + e.reason);
                    }
                }
            }
            else {
                console.log("No feelings hurt here!");
            }
        }
        else {
            // This is more clever then good!  Don't use a wildly
            // looping call to setTimeout() in your production code.
            // The consequences of something bad happening here are
            // minimal so we do it.
            setTimeout(run_lint());
        }
    }());
}());
