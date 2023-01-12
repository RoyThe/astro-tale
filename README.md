# LT Website Dev

## How to run

Feel free to clone this repo and run `npm i && npm run server` to see latest build.

Static assets are saved locally, place the folder in root.

## Versions

**v0.0.2** - latest development version with significant improvements

**v0.0.1** - version for primary navigation, CI/CD testing

## Next Steps

 - homepage needs to be finalized
   - replace "News" with "Recent Updates"
     - "Recent Updates" section should pull most recent update info from local db
     - content should load a temporary "in loading" display while images load
   - fill in "Server Status" with relevant designs
     - display most recent info gathered from server
     - give a sense of "things happening"
   - overlay banner is offset without images
   - add hero element blurb about the game for visual candy
   - add socials
   - add "change theme" button
 - About page
   - get design from Roy
 - News page
   - all recent news should come from local db
   - add markdown parsing
 - Media page
   - redesign creator modals, hardcoded with their social links
   - add media scroller that grabs art / webcomic / whatever
 - Updates
   - should also pull from local db like News
 - Forums
   - reroute to Discord
 - Footer

## Known Issues

<details>
  
  - [ ] drawer "Play Now" button text doesn't match theme
  - [x] breakpoints are manually set
  - [ ] logo image is like 400kb


</details>
