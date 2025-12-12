import { useState, useEffect } from "react";
import "./App.css";
import api from "./api/Stu_api";

function App() {

  const [SList, setSList] = useState([]);

  useEffect(() => {
    const fetData = async () => {
      try {
        const res = await api.get("/students");
        setSList(res.data);
        console.log("DATA:", res.data);
      } catch (err) {
        console.error("ERROR:", err);
      }
    };
    fetData();
  }, []);

  return (
    <>
      {SList.length === 0 && <p>No data loaded</p>}

      {SList.map((stu) => (
        <p key={stu.id}>
          {stu.sid} - {stu.sname} - {stu.mark}
        </p>
      ))}
    </>
  );
}

export default App;
