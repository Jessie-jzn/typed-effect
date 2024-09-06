import React from "react";
export interface TypedEffectProps {
    texts: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
    loop?: boolean;
    textStyle?: React.CSSProperties;
}
declare const TypedEffect: React.FC<TypedEffectProps>;
export default TypedEffect;
