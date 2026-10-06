# Week 4 — Backend and database (Milestone 3)

**Goal:** An Express + TypeScript API reading real data from PostgreSQL, with integration tests.

**Main project this week:** `propertyhub`

## Topics by day

| Day | Type | Topic | Resource |
| --- | --- | --- | --- |
| Sunday | Work day · 30–45 min | Node and Express basics | [Open](https://fullstackopen.com/en/part3/node_js_and_express) |
| Monday | Work day · 30–45 min | Routing and middleware | [Open](https://expressjs.com/en/guide/routing.html) |
| Tuesday | Work day · 30–45 min | CREATE TABLE, constraints, indexes | [Open](https://www.postgresqltutorial.com) |
| Wednesday | Work day · 30–45 min | Connection pools and parameterised queries | [Open](https://node-postgres.com) |
| Thursday | Study day · ~5 h | Project structure: routes → controllers → services → database | [Open](https://expressjs.com/en/guide/routing.html) |
| Friday | Study day · ~5 h | What migrations are and why they beat editing the database by hand | [Open](https://salsita.github.io/node-pg-migrate/) |
| Saturday | Study day · ~5 h | Integration testing an API | [Open](https://github.com/ladjs/supertest) |

## Daily checklist

### Sunday (work)

- [ ] **Learn:** Node and Express basics — [resource](https://fullstackopen.com/en/part3/node_js_and_express)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#sunday) → `exercises/sunday.md`

### Monday (work)

- [ ] **Learn:** Routing and middleware — [resource](https://expressjs.com/en/guide/routing.html)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#monday) → `exercises/monday.js`

### Tuesday (work)

- [ ] **Learn:** CREATE TABLE, constraints, indexes — [resource](https://www.postgresqltutorial.com)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#tuesday) → `exercises/tuesday.sql`

### Wednesday (work)

- [ ] **Learn:** Connection pools and parameterised queries — [resource](https://node-postgres.com)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#wednesday) → `exercises/wednesday.md`

### Thursday (off)

- [ ] **Learn:** Project structure: routes → controllers → services → database — [resource](https://expressjs.com/en/guide/routing.html)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#thursday) → `exercises/thursday.sql`
- [ ] **Build:** Express + TypeScript project in `backend/`
- [ ] **Build:** Health-check endpoint, error middleware, environment config

### Friday (off)

- [ ] **Learn:** What migrations are and why they beat editing the database by hand — [resource](https://salsita.github.io/node-pg-migrate/)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#friday) → `exercises/friday.md`
- [ ] **Build:** Migrations for every table in your ER diagram
- [ ] **Build:** Seed script with realistic fake properties
- [ ] **Build:** `GET /properties` and `GET /properties/:id`

### Saturday (off)

- [ ] **Learn:** Integration testing an API — [resource](https://github.com/ladjs/supertest)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#saturday) → `exercises/saturday.test.js`
- [ ] **Build:** Separate test database; integration tests for both GET endpoints (including 404)
- [ ] **Build:** Add the integration tests to CI
- [ ] **Build:** Send me the repo

## All resources this week

- [Full Stack Open Part 3](https://fullstackopen.com/en/part3)
- [Express guide](https://expressjs.com/en/guide/routing.html)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com)
- [node-postgres](https://node-postgres.com)
- [node-pg-migrate](https://salsita.github.io/node-pg-migrate/)
- [Supertest](https://github.com/ladjs/supertest)

## Notes

Write your teach-back notes and questions in [NOTES.md](NOTES.md).
