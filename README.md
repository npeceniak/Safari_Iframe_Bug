# Safari_Iframe_Bug

This repository was created in order to easily demonstrate a bug that I found in the safaridriver that occurs when trying to switch focus to a dynamically loaded iframe.

Steps to reproduce the bug.

1. Checkout this repository.
2. Run `npm install` from the project root.
3. Run `./node_modules/.bin/wdio wdio.conf.js -r dot` from the project root.

The tests should run in the standard Safari version as well as Safari Technology Preview and the bug occurs in both versions. 
