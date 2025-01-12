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

type CourseGoalsProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>DETELE</button>
    </article>
  );
}