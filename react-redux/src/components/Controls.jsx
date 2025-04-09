import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Controls() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleIncrementClick = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrementClick = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddClick = () => {
    dispatch({
      type: "ADD",
      payload: {
        number: Number(inputRef.current.value),
      },
    });
    inputRef.current.value = "";
  };
  const handleSubtractClick = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        number: Number(inputRef.current.value),
      },
    });
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            onClick={handleIncrementClick}
            type="button"
            className="btn btn-primary"
          >
            Increment
          </button>
          <button
            onClick={handleDecrementClick}
            type="button"
            className="btn btn-success"
          >
            Decrement
          </button>
        </div>
        <div>
          <input
            type="text"
            className="mt-4"
            ref={inputRef}
            placeholder="Enter number here"
          />
          <button
            type="button"
            onClick={handleAddClick}
            className="btn-success btn"
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleSubtractClick}
            className="btn-danger btn"
          >
            Subtract
          </button>
        </div>
      </div>
    </>
  );
}
