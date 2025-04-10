import React, { useState } from "react";
import styles from "./PolygonEditor.module.css";

interface Skill {
  name: string;
  value: number;
}

const skills: Skill[] = [
  { name: "Спорт", value: 3 },
  { name: "Кухня", value: 6 },
  { name: "Учеба", value: 5 },
  { name: "Домашка", value: 9 },
  { name: "Чтение", value: 3 },
  { name: "Что-то", value: 4 },
  { name: "Что-то", value: 7 },
  { name: "Что-то", value: 6 },
];

const PolygonEditor: React.FC = () => {
  const [sides, setSides] = useState<number>(skills.length);

  const handleSidesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 3 && value <= skills.length) setSides(value);
  };

  const getPolygonPoints = (values: Skill[], radius: number = 40) => {
    const points = values.map((skill, i) => {
      const angle = ((Math.PI * 2) / values.length) * i - Math.PI / 2;
      const scaledRadius = (skill.value / 10) * radius;
      const x = 50 + scaledRadius * Math.cos(angle);
      const y = 50 + scaledRadius * Math.sin(angle);
      return `${x},${y}`;
    });
    return points.join(" ");
  };

  const getBorderPoints = (values: Skill[], radius: number = 45) => {
    const points = values.map((_, i) => {
      const angle = ((Math.PI * 2) / values.length) * i - Math.PI / 2;
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      return `${x},${y}`;
    });
    return points.join(" ");
  };

  return (
    <div className="">
      <input
        type="number"
        min="3"
        max={skills.length}
        value={sides}
        onChange={handleSidesChange}
        className="border p-2 mb-4"
      />
      <div>
        <svg width="300" height="300" viewBox="0 0 100 100">
          <polygon
            points={getBorderPoints(skills.slice(0, sides))}
            className={styles.borderPolygon}
          />
          <polygon
            points={getPolygonPoints(skills.slice(0, sides))}
            className={styles.filledPolygon}
          />
          {skills.slice(0, sides).map((skill, i) => {
            const angle = ((Math.PI * 2) / sides) * i - Math.PI / 2;
            const x = 50 + 62 * Math.cos(angle);
            const y = 50 + 62 * Math.sin(angle);
            return (
              <text
                key={i}
                x={x}
                y={y}
                fontSize="2"
                textAnchor="middle"
                fill="black"
              >
                {skill.name}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default PolygonEditor;
