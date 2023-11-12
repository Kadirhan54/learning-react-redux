import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../../redux/counter/counterSlice";
import styles from "./Counter.module.css";
import {
  incrementClick,
  selectClickCount,
} from "../../redux/clicker/clickSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const clickCount = useSelector(selectClickCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(incrementClick());
          }}
        >
          +
        </button>
        <span className="text-4xl">
          Click Count<span className={styles.value}> {clickCount}</span>
        </span>

        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(incrementClick());
          }}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(incrementClick());
            dispatch(increment());
          }}
        >
          +
        </button>
        <span className="text-4xl">
          Counter<span className={styles.value}> {count}</span>
        </span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
            dispatch(incrementClick());
          }}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementByAmount(Number(incrementAmount) || 0));
            dispatch(incrementClick());
          }}
        >
          Add Amount
        </button>
        {/* <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button> */}
      </div>
    </div>
  );
}
