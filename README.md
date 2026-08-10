# POiSE invitation-only beta preview

This public repository contains only a static information page for the POiSE invitation-only beta.
It does not collect personal information, create accounts, accept API keys, bind exchanges, store
credentials, or enable automated trading.

The page is intentionally published with `noindex, nofollow, noarchive` while the product is in
its information-only preview stage. The `Request invitation` control is a local anchor rather than
a contact form or external request channel.

## Publishing

GitHub Pages publishes the repository root with the workflow in
`.github/workflows/deploy-pages.yml`. The workflow is manually dispatched so changes to this
repository do not publish automatically. It does not use an API token, a custom domain, a database,
or an external service.

The preview URL is expected to be:

`https://but78183-hue.github.io/poise-invite-beta/`

Formal onboarding, data collection, support intake, account binding, exchange connectivity, and
automated execution remain out of scope for this repository.
