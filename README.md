
# Typescript Blog Post

## 1. What are some differences between interfaces and types in TypeScript?

In TypeScript, both interface and type can be used to describe the shape of an object or define a custom type. However, there are key differences and use cases where one might be preferred over the other:

    1. "interface" Can extend other interfaces and be extended
       by  other interfaces (extends). but"type" Can extend interfaces
       or types using intersections (&)
### Example of interface :
```

interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
```
### First Example With type extending
```
type A = {
  name: string;
};

type B = {
  age: number;
};

// Intersection: A & B
type AB = A & B;

const person: AB = {
  name: "Alice",
  age: 30,
};

```
### Second Example With interface extending in type

```
interface A {
  name: string;
}

interface B {
  age: number;
}

// Intersecting interfaces with `type`
type AB = A & B;

const user: AB = {
  name: "Bob",
  age: 25,
};

```
    2. "interface" Supports declaration merging that means You can
        define the same interface multiple times, and TypeScript will merge 
        their properties. but "type" Does not support declaration merging.

### Example of Interfaces support declaration merging

```
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Merged interface:
interface Person {
   name: string;
  age: number;
 }

const user: Person = {
  name: "Alice",
  age: 30,
};

```
### Example of Types do NOT support declaration merging

```

type Person = {
  name: string;
};

type Person = {
  age: number;
};

// ❌ Error: Duplicate identifier 'Person'

```

    3.  `interface`: best for object shapes and class definitions
        `type`: more flexible—can represent unions, primitives, tuples, functions, etc.

---

### ✅ **`interface` – Best for Object Shapes and Classes**

#### Object shape:

```ts
interface User {
  name: string;
  age: number;
}
```

#### With class:

```ts
interface Greeter {
  greet(): void;
}

class Person implements Greeter {
  greet() {
    console.log("Hello!");
  }
}
```

---

### ✅ **`type` – More Flexible**

#### Union type:

```ts
type Status = "pending" | "approved" | "rejected";
```

#### Primitive alias:

```ts
type UserID = string | number;
```

#### Tuple type:

```ts
type NameAge = [string, number];
const person: NameAge = ["Alice", 30];
```

#### Function type:

```ts
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => `Hello, ${name}`;
```

---

🟡 **Summary**:

| Feature              | `interface`                   | `type`                                                     |          |
| -------------------- | ----------------------------- | ---------------------------------------------------------- | -------- |
| Object shapes        | Ideal                       | Also possible                                            |          |
| Classes              | Preferred with `implements` |  Less commonly used                                      |          |
| Union / Intersection | Not supported directly      |  Fully supported                                      | |
| Primitives, Tuples   | Not supported               |  Supported (`string`, `number`, `[string, number]`, etc.) |          |
| Functions            | Verbose                     |  Clean and direct syntax                                  |          |


## 2.  Explain the difference between any, unknown, and never types in TypeScript?

any, unknown, and never are fundamental types in TypeScript, each serving a unique role in the type system. They are used to represent different kinds of type scenarios—any allows opting out of type checking, unknown enforces safe handling of dynamic values, and never signals impossible states or unreachable code. Understanding these three helps developers write safer, more predictable TypeScript code, especially when dealing with dynamic data, exhaustive checks, or strict type contracts

---

## **1. `any` – Opt-out of Type Checking**

* **Allows anything**: You can assign any value, and TypeScript won’t check its usage.
* **Least safe**: Use sparingly, only when you're unsure of the type.

```ts
let value: any = "hello";
value = 42;
value.toFixed(); //  no error, even if risky
```

> 🛑 Use `any` only when you **intentionally want to bypass** type safety.

---

## **2. `unknown` – Safer Alternative to `any`**

* Accepts any value, **but usage requires type checking**.
* Forces **type narrowing** before using the value.

```ts
let value: unknown = "hello";
value = 42;

//  Error: Object is of type 'unknown'.
// value.toFixed();

// Requires type check first:
if (typeof value === "number") {
  value.toFixed(); // Safe
}
```

>  Use `unknown` when accepting external input (like from an API) and you plan to validate or narrow the type.

---

##  **3. `never` – Represents Values That Never Occur**

* Used for:

  * Functions that **never return** (e.g., throw errors or infinite loops)
  * Exhaustiveness checking in `switch` statements

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

> 🧠 Use `never` to **signal unreachable code** or **fully exhaust union types**.

---

### 🔁 Summary Table

| Type      | Description                                       | Can Assign Anything | Can Use Without Check | Use Case Example                         |
| --------- | ------------------------------------------------- | ------------------- | --------------------- | ---------------------------------------- |
| `any`     | Turns off type checking completely                |  Yes               |  Yes                 | Migration, legacy code                   |
| `unknown` | Like `any`, but safer—forces type narrowing       | Yes               |  No                  | API response validation                  |
| `never`   | Represents values that never happen (e.g., error) |  No                |  No                  | Exhaustiveness checking, error functions |

---
