import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./RadarChartComponent.module.css";

interface DataItem {
  subject: string;
  value: number;
}

const RadarChartComponent: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [subject, setSubject] = useState("");
  const [value, setValue] = useState<number | "">("");

  const addData = () => {
    if (subject.trim() && value !== "") {
      setData([...data, { subject, value: Number(value) }]);
      setSubject("");
      setValue("");
    }
  };

  // const changeData = (index: number) => {
  //   setData;
  // };

  const removeData = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <h2>Паутинная диаграмма</h2>
      <div className={styles.data}>
        <div className={styles.left}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Название"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="number"
              placeholder="Значение"
              value={value}
              onChange={(e) =>
                setValue(e.target.value ? Number(e.target.value) : "")
              }
            />
            <button onClick={addData}>Добавить</button>
          </div>
          {data.length > 0 && (
            <div className={styles.dataList}>
              <h3>Добавленные данные</h3>
              <ul>
                {data.map((item, index) => (
                  <li key={index}>
                    <span>{item.subject}</span>
                    <span>{item.value}</span>
                    <button onClick={() => removeData(index)}>Удалить</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.chartContainer}>
            {data.length > 0 ? (
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />

                  <Radar
                    name="Данные"
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            ) : (
              <p className={styles.emptyText}>
                Добавьте данные для отображения диаграммы
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadarChartComponent;
