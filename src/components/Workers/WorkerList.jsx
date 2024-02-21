import React from "react";
import Card from "../UI/Card";

const WorkerList = ({workers, setWorkers}) => {

    if(workers.length < 1) {
        return;
    }

    const deleteWorker = (id) => {
        setWorkers(workers.filter((item) => item.id !== id))
    }

  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between mb-2 p-2 items-start">
          <span className="font-bold">Isim</span>
          <span className="font-bold">Maas</span>
        </li>

        {workers.map((worker) => (
          <li onDoubleClick={() => deleteWorker(worker.id)} key={worker.id} className="flex justify-between items-start mt-2 p-2 rounded-sm cursor-pointer hover:shadow-xl transition duration-150">
            <span>{worker.name}</span>
            <span className="text-teal-700 font-medium">{worker.wage} $</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;