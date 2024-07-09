import { Button } from "react-bootstrap";
import classes from "./List.module.css";
import Cards from "../Cards/Cards";
import { useState } from "react";

const List = () => {
  const [data, setData] = useState([])
  //here added some dummy data for basic idea...need to modify and add styling as per the requirement.
  return (
    <>
      <Cards />
      <div className={classes.backGround}>
        <h1 className={classes.heading}>Todo List</h1>
        <ul>
          {data && data.map((data) => (
            <li key={data.id}>
              <div className={classes.listDiv}>
                <h1>{data.title}</h1>
                <p className={classes.date}>
                  <span>Date: </span>
                  {data.startDate} - {data.endDate}
                </p>
                <div>
                  <Button variant="success" className={classes.btn}>
                    Done
                  </Button>
                  <Button variant="danger" className={classes.btn}>
                    Delete
                  </Button>
                </div>
              </div>
              <p style={{ margin: "10px 10%", textAlign: "justify" }}>
                {data.description}
              </p>
            </li>
          ))}
          {data.length === 0 && <h2 style={{textAlign: "center"}}>There are no tasks...Please add some....</h2>}
        </ul>
      </div>
    </>
  );
};

export default List;
