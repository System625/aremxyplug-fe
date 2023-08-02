import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "./component.module.css";

export const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className={styles.calender}>
      <div className="text-[12px] flex justify-center items-center mt-[3%] w-[90%] mx-auto border lg:text-[16px]">{date.toLocaleDateString()}</div>
      <div className="p-2 ">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};
