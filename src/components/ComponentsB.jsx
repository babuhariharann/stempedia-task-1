import { useDispatch } from "react-redux";
import { addValue } from "../redux/valueSlice";

const ComponentsB = () => {
  const dispatch = useDispatch();

  const onValueChange = (e) => {
    let value = e.target.value;

    dispatch(addValue(value));
  };
  return (
    <>
      <div className="items-center flex flex-col justify-center">
        <h1 className="text-2xl font-bold">Enter your value here</h1>
        <input
          type="text"
          placeholder="value..."
          onChange={onValueChange}
          className="mt-5 bg-gray-200 focus:outline-none px-2 rounded-lg"
        />
      </div>
    </>
  );
};

export default ComponentsB;
