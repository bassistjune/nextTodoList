import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../../atoms/todoAtom";
import {placeholder} from "@babel/types";

const TextComponent: React.FC = () => {
    const [value, setValue] = useState("");
    const setTodos = useSetRecoilState(todoState);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && value.trim()) {
            if (value.length > 20) {
                alert("Todo 내용은 20자 이내로 작성해야 합니다.");
                return false;
            }

           else {
                setTodos((prev) => {
                    if (prev.filter((todo) => !todo.isDone).length >= 10) {
                        alert("완료된 Todo는 최대 10개까지만 가능합니다.");
                        return prev;
                    }
                    return [
                        ...prev,
                        { id: Date.now(), content: value.trim(), isDone: false },
                    ];
                });
                setValue("");
            }
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
            maxLength={20}
        />
    );
};

export default TextComponent;
