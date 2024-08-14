# Backend
A node.js/express server with TypeScript.

## Testing

Sample test:
```ts
test('1+1=2', () => {
  expect(1 + 1).toBe(3);
});
```

No need to import anything. Just name your test files with the `.test.ts` extension and run `npm test`. Tests are also run pre-commit.