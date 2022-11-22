# LT Website Dev

## Test Commands
Feel free to clone this repo and run `npm i && npm run server` for a preview of the current build release. This repo includes all necessary information to open the dev environment I'm working in, though images and other downloaded content is saved locally (for privacy reasons).

## To Do
- [x] copy website
- [x] publish to private repository
- [x] track dead links / issues
- [x] properly document html pages / redirects
- [ ] CI/CD pipeline

## Issue Tracking

**HTML pages**
all only accessible from mobile menu
...-1: redirect to home
...-2: about
...-3: news
...-4: update
...-5: media
...-6: webtoon
...-7: download

links to news
...-8: news via "See Patch Notes", query: ?tp=news.view&page=patchnotes
...-9: news via "Training Session...", query: ?tp=news.view&postid=4198
...-10: news via "New Flash Sales...", query: ?tp=news.view&postid=4199

**requests to update**
- delocalize libs directory
- Vue 2.6.12
- vue-resource 1.3.5

**desktop header**
- each link redirects to actual papaya play page
- cannot remove link with simple search / replace
- clicking logo redirects to papaya, on desktop and mobile

**mobile header**
- `forum` and `support` redirect to papaya
- logo still redirects to papaya

## Addtl. Notes

- need to create process for updating `flagTheme` var
