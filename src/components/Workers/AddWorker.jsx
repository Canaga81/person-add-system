import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = ({setWorkers}) => {

  const [error, setError] = useState();

  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWorkerWage, setEnteredWorkerWage] = useState("");

  const minimumWage = 5000;

  const workerNameChangeHandler = (e) => {
    setEnteredWorkerName(e.target.value);
  };

  const wageChangeHandler = (e) => {
    setEnteredWorkerWage(e.target.value);
  };

  const addWorkerHandler = (e) => {
    e.preventDefault();

    if(enteredWorkerName.trim().length === 0) {
      setError({
        title: "Isim Alani Zorunludur !",
        message: "Lutfen Bir Isim Giriniz !"
      })
      return;
    }

    if(+enteredWorkerWage < minimumWage) {
      setError({
        title: "Maas Alani Zorunludur !",
        message: `Lutfen ${minimumWage} degerinden buyuk bir maas giriniz !`
      })
      return;
    }
    // console.log(enteredWorkerName, enteredWorkerWage);

    setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWorkerWage
      },
      ...prevState
    ])

    setEnteredWorkerName("");
    setEnteredWorkerWage("");
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal error={error} errorHandler={errorHandler} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Calisan Ismi
          </label>
          <input
            type="text"
            className="max-w-[40rem] p-2 w-full mx-auto border"
            placeholder="Calisan Ismi Yaziniz"
            id="name"
            onChange={workerNameChangeHandler}
            value={enteredWorkerName}
          />

          <label htmlFor="wage" className="font-medium">
            Maas Miktari
          </label>
          <input
            type="number"
            className="max-w-[40rem] p-2 w-full mx-auto border"
            placeholder="Maas Giriniz"
            id="wage"
            onChange={wageChangeHandler}
            value={enteredWorkerWage}
          />

          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddWorker;
