### Challenge 2: Return Negative

- **Deskripsi Tantangan:**
  Create a function that takes an integer as an argument and returns the negative form of the number. If the number is already negative, the function should return the number itself.

- **Link Tantangan di CodeWars:**
  [Return Negative](https://www.codewars.com/kata/55685cd7ad70877c23000102)

#### Solusi

```typescript
// Kode solusi TypeScript
export const makeNegative = (num: number): number => -Math.abs(num);
```
