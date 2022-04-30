# UI Regression Testing

Using TS, React, React Router, Storybook

## Testing by Loki + Storybook:
1) Start storybook server `npm run storybook`
2) Add first set of reference files `npx loki update`
3) Do some changes to your components
4) Test against references `npx loki test`
5) Review changes in diff folder
6) Approve changes and update references `npx loki approve`
