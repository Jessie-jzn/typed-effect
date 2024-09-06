import React, { useState, useEffect } from "react";
var TypedEffect = function (_a) {
    var texts = _a.texts, _b = _a.typeSpeed, typeSpeed = _b === void 0 ? 100 : _b, _c = _a.deleteSpeed, deleteSpeed = _c === void 0 ? 50 : _c, _d = _a.pauseTime, pauseTime = _d === void 0 ? 1500 : _d, _e = _a.loop, loop = _e === void 0 ? true : _e, textStyle = _a.textStyle;
    var _f = useState(""), currentText = _f[0], setCurrentText = _f[1]; // 当前显示的文本
    var _g = useState(0), textIndex = _g[0], setTextIndex = _g[1]; // 当前正在打的文本索引
    var _h = useState(false), isDeleting = _h[0], setIsDeleting = _h[1]; // 是否在删除字符
    var _j = useState(false), isPaused = _j[0], setIsPaused = _j[1]; // 是否在暂停状态
    useEffect(function () {
        if (isPaused)
            return; // 暂停状态下不进行任何操作
        var handleTyping = function () {
            var fullText = texts[textIndex]; // 当前要展示的完整文本
            if (isDeleting) {
                // 删除模式：逐个删除字符
                setCurrentText(function (prev) { return fullText.substring(0, prev.length - 1); });
                if (currentText === "") {
                    // 文本删除完后切换到下一条文本
                    setIsDeleting(false);
                    setTextIndex(function (prev) { return (prev + 1) % texts.length; });
                }
            }
            else {
                // 打字模式：逐个增加字符
                setCurrentText(function (prev) { return fullText.substring(0, prev.length + 1); });
                if (currentText === fullText) {
                    // 文本打完后暂停一段时间，开始删除
                    setIsPaused(true);
                    setTimeout(function () {
                        setIsPaused(false);
                        setIsDeleting(true);
                    }, pauseTime);
                }
            }
        };
        var typingSpeed = isDeleting ? deleteSpeed : typeSpeed; // 根据状态选择速度
        var timer = setTimeout(handleTyping, typingSpeed);
        return function () { return clearTimeout(timer); };
    }, [
        currentText,
        isDeleting,
        isPaused,
        textIndex,
        texts,
        typeSpeed,
        deleteSpeed,
        pauseTime,
    ]);
    // 循环结束的处理
    useEffect(function () {
        if (!loop && textIndex === texts.length - 1 && currentText === "") {
            setIsPaused(true); // 停止操作
        }
    }, [currentText, textIndex, texts, loop]);
    return React.createElement("div", { style: textStyle }, currentText);
};
export default TypedEffect;
