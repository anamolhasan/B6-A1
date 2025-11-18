# TypeScript keyof Example

## Overview
এই প্রজেক্টে আমরা TypeScript-এর `keyof` keyword ব্যবহার দেখাবো।  
`keyof` মূলত একটি object type-এর সমস্ত property names কে একটি union type হিসেবে বের করতে ব্যবহার করা হয়। এটি type-safe code লিখতে সাহায্য করে, বিশেষ করে generic functions এবং dynamic property access-এর ক্ষেত্রে।  

---

## 1️⃣ Simple keyof Example

```ts
type Person = {
  name: string;
  age: number;
  city: string;
};

type PersonKeys = keyof Person; 
// PersonKeys = "name" | "age" | "city"
