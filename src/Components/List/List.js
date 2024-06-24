import { useState } from "react";
import { Button } from "react-bootstrap";

const List = () => {
    //here added some dummy data for basic idea...need to modify and add styling as per the requirement.
    const [todoList, setTodoList] = useState([
        {
            "id": 1,
           "title": "Clean the kitchen",
           "description": "Mop the floor, wipe the countertop and don't forget to take out the trash!"
        },
        {
            "id": 2,
           "title": "Call Mom",
           "description": "It's her birthday!"
        },
        {
            "id": 3,
           "title": "Water flowers",
           "description": "They need water, or they will die."
        }
     ])
    return (
        <div
        style={{
          backgroundColor: "#F4E7F5",
          width: "90%",
          marginLeft: "5%",
          height: "max-content",
          color: "black",
        }}>
            <h1 style={{textAlign: 'center'}}>Todo List</h1>
            <ul>
                {todoList.map((data) => (
                    <li key={data.id}>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;