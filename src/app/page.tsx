import { TaskContent } from "./_components/TaskContent";

export default function Home() {
  console.log("render")
  return (
    <div className="flex flex-col items-center h-screen">
      <TaskContent />
    </div>
  );
}
