import SignIn from "./_components/SignIn";
import SignUp from "./_components/SignUp";

const HomePage = () => {
  return (
    <div className="flex gap-36">
      <SignUp />
      <SignIn />
    </div>
  );
};

export default HomePage;
