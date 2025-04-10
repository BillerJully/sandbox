import React, { useState, useEffect } from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styles from "./SpiderDiagram.module.css";

interface DiagramItem {
  name: string;
  value: number;
}
const SpiderDiagram: React.FC = () => {
  const [items, setItems] = useState<DiagramItem[]>([]);
  const [itemName, setItemName] = useState<string | "">("");
  const [itemValue, setItemValue] = useState<number>(0);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerHeight = windowWidth < 768 ? 300 : 400;

  const addItem = () => {
    if (itemName.trim()) {
      setItems([...items, { name: itemName, value: Number(itemValue) }]);
      setItemValue(0);
      setItemName("");
    }
    console.log(items);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const increaseItemValue = (index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, value: item.value + 1 } : item
      )
    );
  };

  const decreaseItemValue = (index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, value: Math.max(0, item.value - 1) } : item
      )
    );
  };
  return (
    <div className={styles.spiderContainer}>
      <div className={styles.spiderContainerLeft}>
        <h2 className={styles.spiderContainerLeft_Title}>
          Паутинная диаграмма
        </h2>
        <div className={styles.addInputContainer}>
          <input
            type="text"
            placeholder="Название"
            value={itemName}
            className={styles.addItemInput}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button className={styles.addItemButton} onClick={addItem}>
            Добавить
          </button>
        </div>
        <div className={styles.ItemsList}>
          {items.length > 0 && (
            <>
              <h4 className={styles.ItemsList_title}>Добавленные данные</h4>
              <ul>
                {items.map((items, index) => (
                  <li className={styles.itemsLine} key={index}>
                    <span>{index + 1}. </span>
                    <span className={styles.itemName}>{items.name} </span>
                    <div className={styles.itemValue}>
                      <button
                        className={styles.itemValueChangeButton}
                        onClick={() => decreaseItemValue(index)}
                      >
                        -
                      </button>
                      <span>{items.value}</span>
                      <button
                        className={styles.itemValueChangeButton}
                        onClick={() => increaseItemValue(index)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className={styles.removeItem}
                      onClick={() => removeItem(index)}
                    >
                      Удалить
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className={styles.spiderContainerRight}>
        {items.length > 2 ? (
          <ResponsiveContainer width="100%" height={containerHeight}>
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="60%"
              height={containerHeight}
              data={items}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />

              <Radar
                name="Данные"
                dataKey="value"
                fill="#0775e2"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <p>Добавьте элементы для демонстрации диаграммы</p>
        )}
      </div>
    </div>
  );
};

export default SpiderDiagram;
