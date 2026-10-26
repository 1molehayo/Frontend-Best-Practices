# Git

## Commit messages

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

The subject is imperative, present tense, and lowercase, with no final period. Keep it within 50 characters. Wrap the body at 72.

The body says why. The diff says what.

```
fix(checkout): keep the total in minor units

The API returns pence. Formatting in the form divided twice
and showed a tenth of the price.

Closes #308
```

Scope is the area a teammate would search: `checkout`, `nav`, `auth`. Omit it when the change touches the whole repo.

The footer references the issue or story the change closes.

These seven rules are the short version, from [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/):

1. Separate the subject from the body with a blank line.
2. Limit the subject to 50 characters.
3. Do not capitalize the subject.
4. Do not end the subject with a period.
5. Use the imperative in the subject.
6. Wrap the body at 72 characters.
7. Use the body for what and why.

The type and scope prefix follows [Conventional Commits](https://www.conventionalcommits.org/).

## Branches

One change per branch. A reviewer should be able to describe it in a few sentences.

Do not commit generated output, secrets, or dependency folders.
