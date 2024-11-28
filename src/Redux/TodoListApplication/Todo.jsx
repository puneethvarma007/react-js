
import { useState } from "react";
import { editTodo, deleteTodo } from "./action";
import { useDispatch } from "react-redux";

function List(props) {
    const id = props.id;
    const title = props.title;
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newTitle.trim()) {
      dispatch(editTodo({ id: id, title: newTitle }));
      setEditing(false);
    }
  };
  const handleDelete = () => {
    const confirm = window.confirm(`Are you sure you want to delete id: ${id} from todo: ${newTitle}`);
    if(confirm) {
        dispatch(deleteTodo(id));
    }
  };
  return (
    <div className="container w-50 rounded-2">
      {editing ? (
        <div className="form-group ">
          <input
            className="form-control"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={handleTodo}>
            save
          </button>
        </div>
      ) : (
        <li className="list-group-item d-flex justify-content-between">
          <p>{title}</p>
          <div className="actions ">
            <button
              className="btn btn-warning"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger mx-2 " onClick={handleDelete}>
              Del
            </button>
          </div>
        </li>
      )}
    </div>
  );
}

export default List;