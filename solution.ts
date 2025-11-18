
type ValueType = string | number | boolean;

const formatValue = (value: ValueType): string | number | boolean => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
}


const getLength = (value: string | any[]): number => {
  if (typeof value === 'string') {
    return value.length;
  }
  return value.length;
};



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  return items.filter(item => item.rating >= 4);
};


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter(user => user.isActive);
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`;
};



const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {
  const result: (string | number)[] = [];

  for (const value of arr1) {
    let exists = false;
    for (const v of result) {
      if (v === value) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(value);
    }
  }

  for (const value of arr2) {
    let exists = false;
    for (const v of result) {
      if (v === value) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(value);
    }
  }

  return result;
};



type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }

  return products.reduce((total, product) => {
    let price = product.price * product.quantity;

    if (product.discount !== undefined) {
      price = price - (price * product.discount) / 100;
    }

    return total + price;
  }, 0);
};
