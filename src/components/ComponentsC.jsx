import { useSelector } from "react-redux";

const ComponentsC = () => {
  const value = useSelector((store) => store.value.value);
  return (
    <>
      <div className="items-center flex flex-col justify-center mt-5">
        <p className="text-red-500 text-md">Value from redux store</p>
        <div className="px-2 py-2 bg-gray-200 rounded-lg w-44 overflow-hidden mt-5">
          <p>{value}</p>
        </div>
      </div>
    </>
  );
};

export default ComponentsC;
