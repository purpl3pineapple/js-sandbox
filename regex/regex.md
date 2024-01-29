# Regular Expressions

---

---

## Assertions

### Positive Lookahead

**Pattern:** `regexp1(?=regexp2)`

- Asserts `regexp1` to be immediately followed by `regexp2`
- Lookahead is excluded & only asserts whether there is a possible match or not
- Does not return matches of `regexp2`

### Negative Lookahead

**Pattern:** `regexp1(?!regexp2)`

- Asserts `regexp1` to **NOT** be immediately followed by `regexp2`
- Lookahead is excluded & only asserts whether there is a possible match or not
- Does not return matches of `regexp2`
