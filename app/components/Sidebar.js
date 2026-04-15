export default function Sidebar() {
  return (
    <div className="bg-black text-white w-[240px] rounded-3xl p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-10">Board.</h1>

        <ul className="space-y-6">
          <li className="font-semibold">Dashboard</li>
          <li className="text-gray-400">Transactions</li>
          <li className="text-gray-400">Schedules</li>
          <li className="text-gray-400">Users</li>
          <li className="text-gray-400">Settings</li>
        </ul>
      </div>

      <div className="text-sm text-gray-400 space-y-2">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}