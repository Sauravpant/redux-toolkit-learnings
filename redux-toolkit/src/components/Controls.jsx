import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/CounterSlice";

export default function Controls() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleIncrementClick = () => {
    console.log("Incremented");
    dispatch(counterActions.increment())
  };

  const handleDecrementClick = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddClick = () => {
    dispatch(
      counterActions.add({
          number: Number(inputRef.current.value),
      })
    );
    inputRef.current.value = "";
  };
  const handleSubtractClick = () => {
    dispatch(
      counterActions.subtract({
          number: Number(inputRef.current.value)
      })
    );
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
