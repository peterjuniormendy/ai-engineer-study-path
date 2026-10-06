# AI Engineer Study Path

My daily study path to becoming an AI engineer. This repo holds **learning and exercises only**. The main projects (`property-statistics`, `propertyhub`, …) live in their own repos.

## How a week works

| Days | Time | What I do |
| --- | --- | --- |
| Sunday–Wednesday (work days) | 30–45 min | One topic + one small exercise |
| Thursday–Saturday (off days) | ~5 h | Short learning, exercises, then build the main project |

Each week has its own folder:

```
week-01-developer-reset/
├── README.md       ← topics by day, resource links, daily checklist
├── EXERCISES.md    ← every exercise for the week, by day
├── NOTES.md        ← teach-back notes, questions, what was hard
└── exercises/      ← one file per exercise; write your answers here
```

## Workflow

1. Open the week's `README.md` and do the day's **Learn** item.
2. Do the day's exercise in its file under `exercises/`.
3. Tick the boxes in `README.md` and `EXERCISES.md`.
4. Commit and push:

   ```
   git add .
   git commit -m "week-01: sunday exercise"
   git push
   ```

5. Tell Claude what you pushed, and we review it together.

## Rules

- No AI-generated code in Phases 1–3. Ask for explanations and hints, not answers.
- When stuck: what I think is happening, what I tried, what I expected, what happened.
- Overtime on a study day: skip that day's exercise, keep the build. A week can slip; a milestone can't be skipped.
- No milestone passes without tests.

## Phase 1 progress (PropertyHub)

- [ ] [Week 1 — Developer reset (Milestone 0)](week-01-developer-reset/README.md)
- [ ] [Week 2 — TypeScript and first tests (Milestone 1)](week-02-typescript-and-testing/README.md)
- [ ] [Week 3 — Designing PropertyHub (Milestone 2)](week-03-designing-propertyhub/README.md)
- [ ] [Week 4 — Backend and database (Milestone 3)](week-04-backend-and-database/README.md)
- [ ] [Week 5 — Property API (Milestone 4)](week-05-property-api/README.md)
- [ ] [Week 6 — Authentication (Milestone 5)](week-06-authentication/README.md)
- [ ] [Week 7 — React frontend, part 1 (Milestone 6)](week-07-react-frontend/README.md)
- [ ] [Week 8 — Forms, login, search and filters (Milestones 6–7)](week-08-forms-search-filters/README.md)
- [ ] [Week 9 — Uploads, favourites and enquiries (Milestones 7–8)](week-09-uploads-favourites-enquiries/README.md)
- [ ] [Week 10 — Secure and ship it (Milestone 9)](week-10-secure-and-ship/README.md)

Later phases are added as I reach them.
