## I built this Counter App to understand how components, state, and event handling work together.

## 1. Creating the Component

First, I created a `components` folder inside `src` and added `CounterApp.jsx`.

```text
src/
├── components/
│   └── CounterApp.jsx
├── App.jsx
└── main.jsx
```

I created a separate component to keep the counter's logic and UI organized instead of writing everything inside `App.jsx`.

## 2. Using useState()

Inside `CounterApp.jsx`, I imported `useState` and created the counter state.

```jsx
import { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(prev => prev + 1);
  }

  function dec() {
    setCount(prev => prev - 1);
  }

  return (
    <div>
      <h3>Counter</h3>
      <button onClick={inc}>ADD+</button>
      <p>{count}</p>
      <button onClick={dec}>SUB-</button>
    </div>
  );
};

export default CounterApp;
```

I used `useState(0)` because I wanted the counter to start at zero. `count` holds the current value, and `setCount` updates it.

## 3. Connecting the Component to App.jsx

I imported the counter component into `App.jsx`:

```jsx
import CounterApp from './components/CounterApp';

function App() {
  return (
    <div>
      <h1>MY COUNTER APP</h1>
      <CounterApp />
    </div>
  );
}

export default App;
```

I used `<CounterApp />` to display my component inside the main application. The app starts from `main.jsx`, renders `App.jsx`, and then displays `CounterApp.jsx`.

## 4. How the Counter Works

When I click ADD+, the `onClick` handler calls `inc()`. That function updates the state using `setCount()`. React then renders the component again and displays the new value.

SUB- works in the same way but decreases the value.

**The flow is:** Button click → Function call → State update → UI update.

## 5. Three Versions

- **V1 — Basic Counter:** Starts at `0` and supports increment and decrement.
- **V2 — Default Value:** Starts at `10` using `useState(10)`.
- **V3 — User Input:** Lets the user enter an initial value before starting the counter.

## 6. What I Learned

Through this project, I practised creating reusable components, importing components between files, using the `useState` Hook, handling button clicks, and understanding how React updates the UI when state changes.

This was a small project, but building it step by step helped me understand React better through code rather than just theory.
