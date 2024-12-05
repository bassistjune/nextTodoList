import React from "react";
import { useRecoilState } from "recoil";
import { todoState, filterState } from "../../atoms/todoAtom";

import Tabs from "./tabs";
import Counter from "./counter";
import ItemList from "./listItem";

const Contents: React.FC = () => {
    const [todos, setTodos] = useRecoilState(todoState);
    const [filter, setFilter] = useRecoilState(filterState);

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
        );
    };

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "TODO") return !todo.isDone;
        if (filter === "DONE") return todo.isDone;
        return true;
    });

    return (
        <section className="contents">
            <dl>
                <dt>
                    <Tabs filter={filter} setFilter={setFilter} />
                </dt>
                <dd>
                    <Counter count={filteredTodos.length} />
                    <ul>
                        {filteredTodos.map((todo) => (
                            <ItemList
                                key={todo.id}
                                todo={todo}
                                toggleTodo={toggleTodo}
                                deleteTodo={deleteTodo}
                            />
                        ))}
                    </ul>
                </dd>
            </dl>
        </section>
    );
};

export default Contents;
