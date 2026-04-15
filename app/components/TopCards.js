export default function TopCards() {
  const data = [
    {
      title: "Total Revenues",
      value: "$2,129,430",
      bg: "bg-green-100",
    },
    {
      title: "Total Transactions",
      value: "1,520",
      bg: "bg-yellow-100",
    },
    {
      title: "Total Likes",
      value: "9,721",
      bg: "bg-pink-100",
    },
    {
      title: "Total Users",
      value: "892",
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {data.map((item, i) => (
        <div key={i} className={`${item.bg} p-5 rounded-2xl`}>
          <p className="text-sm">{item.title}</p>
          <h2 className="text-xl font-bold mt-2">{item.value}</h2>
        </div>
      ))}
    </div>
  );
}