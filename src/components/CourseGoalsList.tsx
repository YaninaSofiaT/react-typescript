import { CourseGoal as CGoal } from "../App";
import CourseGoals from "./CourseGoal";

type ListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void
};

export default function CourseGoalsList({ goals, onDeleteGoal }: ListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoals title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
}
