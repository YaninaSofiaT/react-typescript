import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: "Learn TS",
        description: "Learn it in depth!",
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add course</button>
      <CourseGoalsList goals={goals} />
    </main>
  );
}
