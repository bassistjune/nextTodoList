import React from "react";

interface CounterProps {
    count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
    return (
        <span className="count">
      총 <em>{count}</em>개
    </span>
    );
};

export default Counter;
