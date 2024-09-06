# TypedEffect

`TypedEffect` 是一个可自定义的轻量级 React 组件，允许你在 React 应用中创建打字动画效果，无需外部依赖。

[中文](README.zh_CN.md)｜[英文](README.md)

## 特性

- 完全可自定义的打字和删除速度
- 支持循环动画
- 适用于任何文本字符串数组
- 原生支持 React 和 TypeScript

## 安装

你可以使用 npm 或 yarn 安装该包：

### 使用 npm:

```bash
npm install typed-effect
```

### 使用 yarn:

```bash
yarn add typed-effect
```

## 使用

### 使用示例

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

### 属性

| 属性名        | 类型            | 默认值 | 描述                                     |
| ------------- | --------------- | ------ | ---------------------------------------- |
| `texts`       | `string[]`      | `[]`   | 要打字显示的字符串数组                   |
| `typeSpeed`   | `number`        | `50`   | 打字速度（以毫秒为单位）                 |
| `deleteSpeed` | `number`        | `30`   | 删除速度（以毫秒为单位）                 |
| `pauseTime`   | `number`        | `1000` | 打字和删除之间的暂停时间（以毫秒为单位） |
| `loop`        | `boolean`       | `true` | 是否循环播放打字动画                     |
| `textStyle`   | `CSSProperties` | `{}`   | 自定义样式                               |

### 高级用法

你可以通过传递不同的属性来完全自定义打字动画。

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

### 工作原理

`TypedEffect` 组件接收一个字符串数组 (`texts` 属性)，并以 "打字" 动画样式显示它们。你可以通过 `typeSpeed` 控制打字速度，`deleteSpeed` 控制删除速度，`pauseTime` 控制动画间的暂停时间，`loop` 决定动画是否循环播放。

## 开发

如果你想在本地开发或为项目做贡献：

1. 克隆仓库：

   ```bash
   git clone https://github.com/your-repo/typed-effect.git
   ```

2. 进入项目目录：

   ```bash
   cd react-typed-effect
   ```

3. 安装依赖：

   ```bash
   npm install
   ```

4. 运行项目：

   ```bash
   npm start
   ```

5. 构建生产环境版本：

   ```bash
   npm run build
   ```

### 文件结构

```
typed-effect/
├── src/
│   ├── TypedEffect.tsx  # 主要组件实现
│   └── index.tsx        # npm 包的入口文件
├── dist/                # 构建输出
├── package.json         # 项目配置
├── README.md            # 文档（本文件）
└── tsconfig.json        # TypeScript 配置
```

## 贡献

如果你发现任何问题或想添加新功能，欢迎提出 issue 或提交 pull request。非常欢迎任何形式的贡献！

## 许可证

本项目基于 MIT 许可证，详情请参见 [LICENSE](LICENSE) 文件。
