import { useSelector } from "react-redux";
export default function Display() {
  const counter = useSelector((store) => store.counter.counter);

  return <h2>Counter:{counter}</h2>;
}
