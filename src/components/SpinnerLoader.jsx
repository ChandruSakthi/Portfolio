
import animation from "../Assets/Animation.gif"
const SpinnerLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <img src={animation} alt="Loading..." className="w-500 h-500" />
    </div>
  );
};

export default SpinnerLoader;




