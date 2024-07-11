import { Button } from "react-bootstrap";
import classes from "../List/List.module.css";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";

const CompletedTodo = () => {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(true);
  const updatedEmail = localStorage
    .getItem("email")
    .replace("@", "")
    .replace(".", "");
  //here added some dummy data for basic idea...need to modify and add styling as per the requirement.

  const fetchHandler = () => {
    setReload(false);
    fetch(
      `https://todo-project-a9541-default-rtdb.firebaseio.com/${updatedEmail}completed.json`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        if (data) {
          console.log(data)
          const allTodoData = Object.keys(data).map((key) => ({
            id: key,
            description: data[key].description,
            dueDate: data[key].dueDate,
            startDate: data[key].startDate,
            status: data[key].status,
            title: data[key].title,
          }));
          setData(allTodoData);
        }
      });
  };

  useEffect(() => {
    if (reload) {
      fetchHandler();
    }
  }, [reload]);

  return (
    <>
      <Cards />
      <div className={classes.backGround}>
        <h1 className={classes.heading}>Todo List</h1>
        <ul>
          {data&& data.map((data) => (
            <li key={data.id}>
              <div className={classes.listDiv}>
                <h1>{data.title}</h1>
                <p className={classes.date}>
                  <span>Date: </span>
                  {data.startDate} - {data.dueDate}
                </p>
                <div>
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
        </ul>
      </div>
    </>
  );
};

export default CompletedTodo;
