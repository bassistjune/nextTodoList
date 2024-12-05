import React from 'react';
interface Props {
    filter: "ALL" | "TODO" | "DONE";
    setFilter: (filter: "ALL" | "TODO" | "DONE") => void;
}

const Tabs: React.FC<Props> = ({ filter, setFilter }) => {
    return (
        <ul className="tabs">
            <li>
                <button type="button" onClick={() => setFilter("ALL")} className={filter === 'ALL' ? 'is-active btn-tab' : 'btn-tab'}>All</button>
            </li>
            <li>
                <button type="button" onClick={() => setFilter("TODO")} className={filter === 'TODO' ? 'is-active btn-tab' : 'btn-tab'}>To Do</button>
            </li>
            <li>
                <button type="button" onClick={() => setFilter("DONE")} className={filter === 'DONE' ? 'is-active btn-tab' : 'btn-tab'}>Done</button>
            </li>
        </ul>
    );
};

export default Tabs;