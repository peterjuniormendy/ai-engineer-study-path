# Week 6 — Authentication (Milestone 5)

**Goal:** Users can register and log in, and only owners can change their listings.

**Main project this week:** `propertyhub`

## Topics by day

| Day | Type | Topic | Resource |
| --- | --- | --- | --- |
| Sunday | Work day · 30–45 min | User administration | [Open](https://fullstackopen.com/en/part4/user_administration) |
| Monday | Work day · 30–45 min | Why passwords are hashed, not encrypted | [Open](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) |
| Tuesday | Work day · 30–45 min | How JWTs work and where to store them | [Open](https://jwt.io/introduction) |
| Wednesday | Work day · 30–45 min | Authentication vs authorisation | [Open](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) |
| Thursday | Study day · ~5 h | Token authentication | [Open](https://fullstackopen.com/en/part4/token_authentication) |
| Friday | Study day · ~5 h | Rate limiting and brute-force attacks | [Open](https://github.com/express-rate-limit/express-rate-limit) |
| Saturday | Study day · ~5 h | What happens when a token expires | [Open](https://jwt.io/introduction) |

## Daily checklist

### Sunday (work)

- [ ] **Learn:** User administration — [resource](https://fullstackopen.com/en/part4/user_administration)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#sunday) → `exercises/sunday.md`

### Monday (work)

- [ ] **Learn:** Why passwords are hashed, not encrypted — [resource](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#monday) → `exercises/monday.js`

### Tuesday (work)

- [ ] **Learn:** How JWTs work and where to store them — [resource](https://jwt.io/introduction)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#tuesday) → `exercises/tuesday.md`

### Wednesday (work)

- [ ] **Learn:** Authentication vs authorisation — [resource](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#wednesday) → `exercises/wednesday.md`

### Thursday (off)

- [ ] **Learn:** Token authentication — [resource](https://fullstackopen.com/en/part4/token_authentication)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#thursday) → `exercises/thursday.md`
- [ ] **Build:** Migration for `users` and `owner_id`
- [ ] **Build:** `POST /auth/register` and `POST /auth/login` with bcrypt and JWTs
- [ ] **Build:** Auth middleware that reads and verifies the token

### Friday (off)

- [ ] **Learn:** Rate limiting and brute-force attacks — [resource](https://github.com/express-rate-limit/express-rate-limit)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#friday) → `exercises/friday.md`
- [ ] **Build:** Protect create, edit and delete routes
- [ ] **Build:** Owner-only edit and delete
- [ ] **Build:** Rate-limit the login endpoint

### Saturday (off)

- [ ] **Learn:** What happens when a token expires — [resource](https://jwt.io/introduction)
- [ ] **Exercise:** see [EXERCISES.md](EXERCISES.md#saturday) → `exercises/saturday.md`
- [ ] **Build:** Tests: missing token (401), expired token (401), someone else's listing (403)
- [ ] **Build:** Commit, push, CI green
- [ ] **Build:** Auth teach-back session with me

## All resources this week

- [Full Stack Open Part 4](https://fullstackopen.com/en/part4)
- [OWASP: Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [jwt.io introduction](https://jwt.io/introduction)
- [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit)

## Notes

Write your teach-back notes and questions in [NOTES.md](NOTES.md).
