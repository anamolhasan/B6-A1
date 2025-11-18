# TypeScript: Interface vs Type

## Overview
TypeScript-এ `interface` এবং `type` অনেকটাই একই কাজ করে, কিন্তু কিছু subtle পার্থক্য আছে।  
এই README-এ আমরা সহজভাবে তাদের মধ্যে পার্থক্য দেখাবো, উদাহরণসহ।  

---

## 1️⃣ Interface

**ব্যবহার:**  
- মূলত object structure বা class-এর জন্য type define করতে।  
- inheritance বা extension করতে পারা যায়।  

**উদাহরণ:**

```ts
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 25
};

// Interface extend করা
interface Employee extends Person {
  salary: number;
}

```
## 2️⃣ Type Alias (type)

**ব্যবহার:**  
- Primitive, union, tuple, object ইত্যাদি সব ধরনের type define করতে।
- অনেক বেশি flexible। 

**উদাহরণ:**

```ts
type Student = {
  name: string;
  age: number;
};

type CollegeStudent = Student & { grade: string };

const student: CollegeStudent = {
  name: "Bob",
  age: 20,
  grade: "A"
};

// Union Type
type ID = string | number;
const myID1: ID = 123;
const myID2: ID = "ABC123";


```


# TypeScript keyof Example

## Overview 
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
