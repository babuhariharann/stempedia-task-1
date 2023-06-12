import ComponentsB from "./ComponentsB";
import ComponentsC from "./ComponentsC";

const ComponentsA = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-gray-300 px-5 py-5 rounded-xl shadow-lg w-72 overflow-hidden">
          <ComponentsB />
          <ComponentsC />
        </div>
      </div>
    </>
  );
};

export default ComponentsA;
