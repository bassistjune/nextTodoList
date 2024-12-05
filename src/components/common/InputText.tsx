import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../../atoms/todoAtom";

const TextComponent: React.FC = () => {
    const [value, setValue] = useState("");
    const setTodos = useSetRecoilState(todoState);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && value.trim()) {
            setTodos((prev) => [
                ...prev,
                { id: Date.now(), content: value.trim(), isDone: false },
            ]);
            setValue("");
        }
    };

    return (
        <input
            type="text"
            value={value}
            className="addTodo"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="할 일을 입력 해주세요."
        />
    );
};

export default TextComponent;
