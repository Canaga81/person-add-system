import Button from "./Button";
import Card from "./Card";

const ErrorModal = ({error, errorHandler}) => {

    const {title, message} = error;

  return (
    <div className="fixed top-1/4 left-0 flex justify-center mx-auto w-full z-50">
        <div onClick={errorHandler} className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0"></div>
      <Card className="w-[32rem] p-0 z-20">
        <header className="bg-red-700 p-4 rounded-t-xl">
          <h2 className="text-white font-medium text-center text-xl">{title}</h2>
        </header>
        <section className="p-4">{message}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32" onClick={errorHandler}>Tamam</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;