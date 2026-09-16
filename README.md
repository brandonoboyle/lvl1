# Level One Game Pub

Website for [Level One Game Pub](https://lvl1.pub) — a game pub featuring board games, trivia, and events.

## Tech Stack

- **Framework**: SvelteKit 2 + Svelte 5
- **CMS**: Prismic (Slice Machine)
- **Styling**: Tailwind CSS + Skeleton UI
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics + Speed Insights
- **Email**: Resend

## Development

```bash
npm install
npm run dev
```

`dev` runs both the Vite dev server and Slice Machine UI concurrently.

## Key Routes

| Route              | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `/`                | Home (Prismic page)                                      |
| `/board_games`     | Board game search and catalog                            |
| `/api/menu-stock`  | Server-only proxy for the protected dashboard stock feed |
| `/api/send-email`  | Contact form email endpoint                              |
| `/api/preview`     | Prismic preview handler                                  |
| `/slice-simulator` | Local Slice Machine simulator                            |

## Slices

Content slices managed via Prismic Slice Machine:

`Hero`, `HeroSmall`, `Text`, `TextCentered`, `TextColumns`, `TextWithImage`, `Image`, `ImageWithText`, `PageSplit`, `PageSplitCards`, `BgPageSplitCards`, `GridSelect`, `Video`, `Form`, `Reservation`, `LargeReso`, `MenuItems`, `Search`, `VideoGameSearch`, `GeekTriviaThemes`, `GeekTriviaScores`, `Googlemap`

## Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start dev server + Slice Machine     |
| `npm run build`        | Production build                     |
| `npm run preview`      | Preview production build             |
| `npm run check`        | Type-check with svelte-check         |
| `npm run test:menu`    | Test the menu labels and stock proxy |
| `npm run lint`         | Lint and format check                |
| `npm run format`       | Format files                         |
| `npm run slicemachine` | Start Slice Machine UI only          |

## Live menu availability

`/food` and `/drink` show every menu item. An item that is unavailable is labeled
`Temporarily unavailable` with a diagonal stripe over a greyed photo, rather than
being removed from the page.

An item is labeled unavailable when either:

- **Toast** reports it out of stock, via the dashboard stock feed. No Prismic
  publication or site rebuild is needed; the label appears and clears on its own.
- **Prismic** has the `86 item` switch on. This is the manual override and it wins
  even when Toast says the item is available.

Toast items are matched to Prismic cards by slugifying the card title, so a rename
on either side breaks the match and the item silently shows as available. Check both
when a label does not appear.

Cards with the `86 item` switch on and no image, price, text or notes are treated as
empty Prismic placeholders and stay hidden. Give a card a price to keep it visible.

To retire an item for good, delete its card in Prismic.

### Stock feed

Set `DASHBOARD_STOCK_API_URL` and `DASHBOARD_STOCK_API_TOKEN` in Vercel Preview and
Production; see `.env.example`. The token stays on the server behind `/api/menu-stock`.

The page re-checks every 30 seconds while visible, keeps the last known labels through
a brief outage, and drops them after five consecutive failures. Stock data older than
45 minutes is rejected as stale.

Add `?stock-preview=1` to `/food` or `/drink` to render sample labels without calling
the feed, for reviewing the design.
