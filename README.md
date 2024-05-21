# Some of my scrapes using Puppeteer
clone the repo and ```npm install``` to install required node modules  
The code is self explanatory if you have worked with puppeteer and have a decent understanding of nodejs
## Puppeteer
### Daraz and hamrobazaar 
```node daraz.js``` to get scrapped data
- functions maybe commented, uncomment or import to somewhere else to use
- doesn't use stealth mode, so may not work on some sites
- simple and effective, setting dimension to 6000 and 4000 loads all the content during initial launch saving you from getting placeholder images and your sanity(a little reward for reading the README)

## Puppeteer extra
### Nepse data
```node nepseData.js```  to get the scrapped data
- nepse api isn't free and is very costly, so 3rd party stock information sites disbale automation and do not load if bot is detected
- **puppeteer-extra for the rescue** when used enabling the stealth plugin, you get those data as well.
- this makes it work on most sites without an issue
- change the scrapping code as required
## Other
### Script to populate your own database
```populate.js``` demonstrates how you can achieve that  
change the code as required by your backend, this simply runs a loop that sends ```GET requests``` to  
[the-value-crew/nepse-api](https://the-value-crew.github.io/nepse-api) _(do check it out, it's pretty cool)_
and posts them to your own, for fundamentals.  
what isn't available there can be obtained from above scripts 
