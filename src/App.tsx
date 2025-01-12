import CourseGoals from "./components/CourseGoals";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";

type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoals = {
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
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>
    </main>
  );
}
