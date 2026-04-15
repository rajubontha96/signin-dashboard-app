"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", user: 400, guest: 240 },
  { name: "Week 2", user: 300, guest: 139 },
  { name: "Week 3", user: 500, guest: 300 },
  { name: "Week 4", user: 200, guest: 278 },
];

export default function ActivityChart() {
  return (
    <div className="bg-white p-6 rounded-2xl mb-6">
      <h3 className="font-semibold mb-4">Activities</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey="user" stroke="#22c55e" />
          <Line type="monotone" dataKey="guest" stroke="#ef4444" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}