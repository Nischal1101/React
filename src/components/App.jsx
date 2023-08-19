import "../styles/App.css";
import { FaPlus, FaTrash } from "react-icons/fa";
import Header from "./Header";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handleNameOnChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
  const handleRemoveOnClick = (index) => {
    data.splice(index, 1);
    console.log("Element removed with index" + index);
    setData([...data]);
  };
  return (
    <>
      <Header />
      <div className="flex gap-3 justify-center mt-5 items-center">
        <input
          className="border-2 border-black p-3"
          value={name}
          onChange={handleNameOnChange}
          type="text"
          name="name"
          id="name"
        />
        <input
          className="border-2 border-black p-3"
          value={email}
          onChange={handleEmailOnChange}
          type="email"
          name="email"
          id="email"
        />
        <button
          onClick={handleOnClick}
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center"
        >
          <FaPlus />
        </button>
      </div>
      <div className=" flex flex-col items-center w-full mt-5">
        <div className="flex justify-between  w-1/2 shadow-2xl py-5 px-3 ">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
        </div>

        {data.map((ele, index) => {
          return (
            <div
              key={index}
              className="flex justify-between shadow-xl w-1/2 py-5 mt-5 px-3"
            >
              <h3>{ele.name}</h3>
              <h3>{ele.email}</h3>
              <h3>
                <FaTrash
                  onClick={() => {
                    handleRemoveOnClick(index);
                  }}
                />
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
