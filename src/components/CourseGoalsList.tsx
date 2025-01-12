import { CourseGoal as CGoal } from "../App";
import CourseGoals from "./CourseGoal";

type ListProps = {
  goals: CGoal[];
};

export default function CourseGoalsList({ goals }: ListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoals title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
}
