import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {

  const [filtering, setFiltering] = useState("all");
  
  const tasks = useSelector((state) => state.counterReducer.todos);
 
  return (
    <div style={{ paddingTop: "20px" }}>
      <div style={{ paddingTop: "20px" }}>
      <button style={{ backgroundColor: "#f44336" }} onClick={() => setFiltering("all")} >All Tasks</button>
      <button style={{ backgroundColor: "#f44336" }} onClick={() => setFiltering('done')} >Done</button>
      <button style={{ backgroundColor: "#f44336" }} onClick={() => setFiltering("not done")} >Not Done</button>
    </div>
      tasklist:
      {filtering == 'all'
          ? tasks.map((el) => <Task el={el}  />)
          : (filtering == 'done')
          ? tasks.filter((el) => el.check == true).map((el) => (
              <Task el={el} />
            ))
          : tasks.filter((el) => !el.check).map((el) => (
              <Task el={el}  />
            ))}
    </div>
  );
};
export default TaskList;
