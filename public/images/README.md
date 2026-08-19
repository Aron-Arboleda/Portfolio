# Image assets

Drop WebP files here using the paths below. No code changes are needed when you add files.

## Specs


| Asset type            | Format | Size notes                                     |
| --------------------- | ------ | ---------------------------------------------- |
| Project screenshots   | WebP   | Max width 1920px, compressed                   |
| Profile photo (About) | WebP   | 800×800 square                                 |
| Home hero photo       | WebP   | 600×800 or 3:4 portrait                        |
| Certificate scans     | WebP   | Landscape scan or screenshot, max width 1600px |
| OG default            | WebP   | 1200×630 for social sharing                    |


Run `npm run verify:images` to list missing files. Use `npm run verify:images:warn` to log without failing.

## Global


| File                     | Path                         |
| ------------------------ | ---------------------------- |
| OG default               | `og-default.webp`            |
| Profile portrait (About) | `profile/aron-portrait.webp` |
| Home hero portrait       | `profile/aron-hero.webp`     |


## Certificates (About page)

One folder per certificate, named after its `id` in `src/data/certificates.ts`. Each folder contains `certificate.webp`.


| Certificate          | Path                                             |
| -------------------- | ------------------------------------------------ |
| RAITE Hackathon      | `certificates/raite-hackathon/certificate.webp`  |
| Cisco Switching      | `certificates/cisco-switching/certificate.webp`  |
| Cisco Networks       | `certificates/cisco-networks/certificate.webp`   |
| Sololearn JavaScript | `certificates/sololearn-js/certificate.webp`     |
| Sololearn Python     | `certificates/sololearn-python/certificate.webp` |


## Per-project files

Each project needs `hero.webp` plus the gallery files listed.

### renovate-ai

- `projects/renovate-ai/hero.webp` (home page hero section)
- `projects/renovate-ai/chat-widget.webp`
- `projects/renovate-ai/workflow-1.webp`
- `projects/renovate-ai/workflow-2.webp`
- `projects/renovate-ai/workflow-3.webp`
- `projects/renovate-ai/workflow-4.webp`
- `projects/renovate-ai/slack-alert.webp`
- `projects/renovate-ai/follow-up-email.webp`
- `projects/renovate-ai/architecture.webp`
- `projects/renovate-ai/page-1.webp`
- `projects/renovate-ai/page-2.webp`
- `projects/renovate-ai/page-3.webp`
- `projects/renovate-ai/page-4.webp`
- `projects/renovate-ai/page-5.webp`

### u-heal

- `projects/u-heal/hero.webp`
- `projects/u-heal/mobile-1.webp`
- `projects/u-heal/mobile-2.webp`
- `projects/u-heal/dashboard.webp`
- `projects/u-heal/ai-analysis.webp`

### liquefact

- `projects/liquefact/hero.webp`
- `projects/liquefact/map.webp`
- `projects/liquefact/prediction.webp`
- `projects/liquefact/ui-detail.webp`

### draft2dimen-v2

- `projects/draft2dimen-v2/hero.webp`
- `projects/draft2dimen-v2/calculator.webp`
- `projects/draft2dimen-v2/cost-report.webp`
- `projects/draft2dimen-v2/local-save.webp`

### gas-smoke-detector

- `projects/gas-smoke-detector/hero.webp`
- `projects/gas-smoke-detector/device.webp`
- `projects/gas-smoke-detector/wiring.webp`
- `projects/gas-smoke-detector/demo.webp`

### draft2dimen

- `projects/draft2dimen/hero.webp`
- `projects/draft2dimen/pdf-export.webp`
- `projects/draft2dimen/component-calc.webp`

### liwanag-at-dunong

- `projects/liwanag-at-dunong/hero.webp`
- `projects/liwanag-at-dunong/landing.webp`
- `projects/liwanag-at-dunong/volunteer-form.webp`
- `projects/liwanag-at-dunong/admin-dashboard.webp`

### asean-library-database

- `projects/asean-library-database/hero.webp`
- `projects/asean-library-database/main-menu.webp`
- `projects/asean-library-database/data-entry.webp`
- `projects/asean-library-database/erd.webp`

### rebyu

- `projects/rebyu/hero.webp`
- `projects/rebyu/gameplay.webp`
- `projects/rebyu/flashcards.webp`
- `projects/rebyu/pixel-ui.webp`

### spell

- `projects/spell/hero.webp`
- `projects/spell/home.webp`
- `projects/spell/manual-editor.webp`
- `projects/spell/automatic-editor.webp`

### subnetting-vlsm-calculator

- `projects/subnetting-vlsm-calculator/hero.webp`
- `projects/subnetting-vlsm-calculator/subnetting.webp`
- `projects/subnetting-vlsm-calculator/vlsm.webp`

### zodiac-sign-identifier

- `projects/zodiac-sign-identifier/hero.webp`
- `projects/zodiac-sign-identifier/home-page.webp`

### pivit

- `projects/pivit/hero.webp`
- `projects/pivit/profile.webp`
- `projects/pivit/quests.webp`
- `projects/pivit/shop.webp`
- `projects/pivit/update.webp`

### nom-vet

- `projects/nom-vet/hero.webp`
- `projects/nom-vet/dashboard.webp`
- `projects/nom-vet/records.webp`

### reminders-builder

- `projects/reminders-builder/hero.webp`
- `projects/reminders-builder/reminder-list.webp`
- `projects/reminders-builder/create-reminder.webp`

### raite-hackathon (optional)

- `projects/raite-hackathon/hero.webp`
- `projects/raite-hackathon/team.webp`
- `projects/raite-hackathon/demo.webp`
