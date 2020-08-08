import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "features/counter/counterSlice";
import styles from "features/counter/Counter.module.css";

export default function Add() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          Add Amount
        </button>
      </div>
    </div>
  );
}
