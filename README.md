# DevStack

DevStack is a modern, interactive web application designed to help developers choose and manage their ideal technology stack. Whether you are exploring frontend frameworks, backend databases, or development tooling, DevStack allows you to compare options side-by-side, select the tools that fit your project, and build a personalized stack.

## Technologies Used

This project was built using the following technologies:

* React: For building the user interface and managing component state.
* TypeScript: For adding static type checking and improving code quality.
* Tailwind CSS: For rapid, utility-first styling and responsive design.
* Vite: As the fast build tool and development server.
* React Icons: For beautiful, scalable vector icons.
* React-Toastify: For providing user feedback via toast notifications.

## Key Features

1. Interactive Stack Builder: Users can browse a catalog of technologies and add them to their personal stack. The selected stack is displayed dynamically in a sticky sidebar.
2. Stack Management with Notifications: Users can easily remove individual items from their stack or clear the entire stack at once, with smooth toast notifications confirming their actions.
3. Responsive & Modern UI: A beautifully designed, mobile-friendly interface featuring gradient text, hover animations, and a layout that adapts seamlessly to different screen sizes.

---

## React Concepts (Q&A)

### 1. What is JSX, and why is it used in React?
* JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript code. It is used in React to make the process of writing and visualizing UI components much easier and more intuitive. Under the hood, JSX is compiled into standard JavaScript function calls (like `React.createElement`).

### 2. What is the difference between props and state?
* Props (Properties): Are read-only data passed down from a parent component to a child component. They are used to configure the child component and cannot be modified by the child itself.
* State: Is data managed internally within a component. It represents information that can change over time, usually due to user interaction or network requests. When state changes, the component re-renders to reflect the new data.

### 3. What does the `useState` hook do, and where did you use it in this project?
* The `useState` hook allows functional components to have local state variables. It returns an array with two values: the current state value and a function to update it.
* In this project: `useState` is used in `App.tsx` to manage the `stack` array. We initialize it as an empty array and use the `setStack` function to add or remove technologies from the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
* The `useEffect` hook allows you to perform side effects (like fetching data, directly updating the DOM, or setting up subscriptions) in a functional component. It runs after the component renders.
* In this project: We used it in `Technologies.tsx` to fetch the JSON data containing the list of available technologies. By running the fetch inside `useEffect` with an empty dependency array `[]`, the data is fetched exactly once when the component first mounts, preventing infinite re-render loops.

### 5. Why does every item in a `.map()` list need a unique key prop?
* React uses the `key` prop to identify which items in a list have changed, been added, or been removed. Giving each item a stable, unique key (like an `id`) allows React's reconciliation algorithm to update the DOM efficiently and accurately. Without a unique key, React might re-render items unnecessarily or get confused about the state of specific list items.

### 6. What is conditional rendering? Show one place you used it.
* Conditional rendering means displaying different UI elements based on certain conditions (like if a piece of state is true or false).
* In this project: We used it in the `Technologies.tsx` component to display the user's stack. We check if `stack.length === 0`. If it is true, we render a "Your stack is empty." message. If it is false, we map over the `stack` array and render the selected technology cards.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* Parent to Child: Data is passed down using props. For example, in `Technologies.tsx`, we pass the `stack` array and the `technologiesPromise` down to the `TechnologiesCard` component as props.
* Child to Parent: A child component cannot directly modify a parent's state. Instead, the parent passes down a callback function as a prop. The child calls this function (e.g., `handleRemoveFromStack`) when an event occurs (like a user clicking a "remove" button), which triggers the state update in the parent.

---
