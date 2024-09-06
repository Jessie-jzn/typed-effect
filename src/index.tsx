// 导入 React
import React from "react";

// 导入 TypedEffect 组件
import TypedEffect, { TypedEffectProps } from "./TypedEffect";

// 重新导出组件以及类型（可选）
// 这允许用户直接从包中导入组件
export { TypedEffect };
export type { TypedEffectProps };

// 设置默认导出
export default TypedEffect;