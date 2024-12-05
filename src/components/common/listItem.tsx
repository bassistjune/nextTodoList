import React from "react";

interface Todo {
    id: number;
    content: string;
    isDone: boolean;
}

interface Props {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const ItemList: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <input
                type="checkbox"
                id={`chk-${todo.id}`}
                className="check-box blind"
                checked={todo.isDone}
                onChange={() => toggleTodo(todo.id)}
            />
            <div className="label-box">
                <label htmlFor={`chk-${todo.id}`}>
          <span
              style={{
                  backgroundImage: `url('/assets/images/Check.svg')`,
                  backgroundColor: todo.isDone ? "#2182f3" : "#ffffff",
                  borderColor: todo.isDone ? "#2182f3" : "#e5e5e5",
              }}
              className="fake-checkbox"
          ></span>
                    <em
                    style={{
                        color: todo.isDone ? '#868686' : ''
                    }}
                    >{todo.content}</em>
                </label>
            </div>
            <button
                className="btn-close"
                style={{ backgroundImage: `url('/assets/images/Close.svg')` }}
                type="button"
                onClick={() => deleteTodo(todo.id)}
            >
                <span className="blind">닫기 버튼</span>
            </button>
        </li>
    );
};

export default ItemList;
