import { type PropsWithChildren } from "react";

// import {type ReactNode } from "react";

// interface CourseGoalsProps {
//   title: string;
//   description: string;
// }

// interface CourseGoalsProps {
//   title: string;
//   children: React.Node;
// }

type CourseGoalsProps = PropsWithChildren<{
  title: string;
  id: number,
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>DETELE</button>
    </article>
  );
}
