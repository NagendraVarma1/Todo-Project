import { Button } from "react-bootstrap";
import classes from "./List.module.css";

const List = () => {
  //here added some dummy data for basic idea...need to modify and add styling as per the requirement.
  const data = [
    {
      id: 1,
      title: "Clean the kitchen",
      description:
        "Mop the floor, wipe the countertop and don't forget to take out the trash!",
        startDate: '18-06-2024',
        endDate: '24-06-2024',
        status: 'completed'
    },
    {
      id: 2,
      title: "Call Mom",
      description: "It's her birthday!",
      startDate: '18-07-2024',
      endDate: '18-07-2024',
      status: 'pending'
    },
    {
      id: 3,
      title: "Water flowers",
      description: "They need water, or they will die.",
      startDate: '26-06-2024',
      endDate: '26-06-2024',
      status: 'completed'
    },
  ];

  return (
    <div className={classes.backGround}>
      <h1 className={classes.heading}>Todo List</h1>
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <div className={classes.listDiv}>
              <h1>{data.title}</h1>
              <p className={classes.date}><span>Date: </span>{data.startDate} - {data.endDate}</p>
              <div>
              <Button variant="success" className={classes.btn}>Done</Button>
              <Button variant="danger" className={classes.btn}>Delete</Button>
              </div>
              
            </div>
              <p style={{margin: '10px 10%', textAlign: 'justify' }}>{data.description}</p>
              
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
