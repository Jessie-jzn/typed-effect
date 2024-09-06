# TypedEffect

`TypedEffect` is a customizable and lightweight React component that allows you to create typing animation effects in your React applications without external dependencies.

[Chinese](README.zh_CN.md)｜[English](README.md)

## Features

- Fully customizable typing and backspacing speeds.
- Ability to loop animations.
- Works with any text string array.
- Supports React and TypeScript out of the box.

## Installation

You can install the package using npm or yarn:

### Using npm:

```bash
npm install typed-effect
```

### Using yarn:

```bash
yarn add typed-effect
```

## Usage

Here's how to use the `TypedEffect` component in your React project:

### Example Usage

```tsx
import React from "react";
import TypedEffect from "typed-effect";

const App = () => {
  const texts = [
    "I'm a React developer.",
    "I enjoy coding in TypeScript.",
    "Building reusable components is fun!",
  ];

  return (
    <div>
      <h1>Typed Effect Demo</h1>
      <TypedEffect
        texts={texts}
        typeSpeed={80}
        deleteSpeed={40}
        pauseTime={1000}
        loop={true}
        textStyle={{
          fontSize: "24px",
        }}
      />
    </div>
  );
};

export default App;
```

### Props

| Prop          | Type            | Default | Description                                                  |
| ------------- | --------------- | ------- | ------------------------------------------------------------ |
| `texts`       | `string[]`      | `[]`    | Array of strings that will be typed.                         |
| `typeSpeed`   | `number`        | `50`    | Speed of typing (in milliseconds).                           |
| `deleteSpeed` | `number`        | `30`    | Speed of backspacing (in milliseconds).                      |
| `pauseTime`   | `number`        | `1000`  | Pause time between typing and backspacing (in milliseconds). |
| `loop`        | `boolean`       | `true`  | Whether to loop the typing animation.                        |
| `textStyle`   | `CSSProperties` | `{}`    | Custom Styles                                                |

### Advanced Usage

You can fully customize the typing animation by passing different props to the component.

```tsx
import React from "react";
import TypedEffect from "typed-effect";

const App = () => {
  const texts = [
    "I love building web applications.",
    "Let's build something awesome!",
    "Reusable components are great!",
  ];

  return (
    <div>
      <h1>Advanced Typed Effect</h1>
      <TypedEffect
        texts={texts}
        typeSpeed={100}
        deleteSpeed={50}
        pauseTime={2000}
        loop={false}
      />
    </div>
  );
};

export default App;
```

### How It Works

The `TypedEffect` component takes an array of strings (`texts` prop) and displays them in a "typing" animation style. You can control the speed of typing (`typeSpeed`), speed of deleting (`deleteSpeed`), pause time between animations (`pauseTime`), and whether the animation should loop (`loop`).

## Development

To run the component locally for development or to contribute to the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/typed-effect.git
   ```

2. Navigate into the project directory:

   ```bash
   cd typed-effect
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the project:

   ```bash
   npm start
   ```

5. To build the project for production:

   ```bash
   npm run build
   ```

### Folder Structure

```
typed-effect/
├── src/
│   ├── TypedEffect.tsx  # The main component implementation
│   └── index.tsx        # Entry point for npm package
├── dist/                # Build output
├── package.json         # Project configuration
├── README.md            # Documentation (this file)
└── tsconfig.json        # TypeScript configuration
```

## Contributing

If you find any issues or want to add a new feature, feel free to open an issue or submit a pull request. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
