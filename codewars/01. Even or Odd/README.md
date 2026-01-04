### Challenge 1: Even or Odd

- **Deskripsi Tantangan:**
  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

- **Link Tantangan di CodeWars:**
  [Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)

#### Solusi

```typescript
// Kode solusi TypeScript
export const evenOrOdd = (n: number): string =>
  (n & 1) === 0 ? "Even" : "Odd";
```

#### Penjelasan

Dalam solusi di atas, saya menggunakan operator bitwise AND (`&`) dengan bilangan 1 (`n & 1`).

Pada tingkat konsep bitwise, kita dapat memahami bahwa operasi `n & 1` bertujuan untuk memeriksa bit paling rendah dari bilangan biner `n`. Ketika kita melakukan operasi AND dengan 1, hasilnya adalah 1 hanya jika bit terakhir dari `n` adalah 1. Dengan kata lain, operasi ini berguna untuk memeriksa kegenapan atau keganjilan suatu bilangan.

Misalnya:

- Bilangan ganjil 5 dalam biner adalah 101. Bit terakhirnya adalah 1.
- Bilangan genap 4 dalam biner adalah 100. Bit terakhirnya adalah 0.

Dengan menggunakan `(n & 1) === 0`, kita memeriksa apakah bit terakhir dari bilangan `n` adalah 0 atau tidak. Jika 0, maka bilangan tersebut genap, dan fungsi mengembalikan "Even". Sebaliknya, jika bit terakhir adalah 1, maka bilangan tersebut ganjil, dan fungsi mengembalikan "Odd".

Penting untuk dicatat bahwa pendekatan ini merupakan cara efisien untuk memeriksa kegenapan atau keganjilan, dan penggunaan bitwise operator dapat mempercepat eksekusi operasi ini.

Pastikan untuk memberikan penjelasan yang lebih rinci atau memberikan contoh tambahan jika diperlukan.
