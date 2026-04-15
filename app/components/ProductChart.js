"use client";

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Basic Tees", value: 55 },
  { name: "Custom Short Pants", value: 31 },
  { name: "Super Hoodies", value: 14 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

export default function ProductChart() {
  return (
    <div className="bg-white p-4 rounded-xl w-1/2">
      <h3 className="mb-4 font-semibold">Top Products</h3>

      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}