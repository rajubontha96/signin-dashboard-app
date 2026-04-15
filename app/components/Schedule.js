export default function Schedule() {
  return (
    <div className="bg-white p-4 rounded-xl w-1/2">
      <h3 className="mb-4 font-semibold">Today's schedule</h3>

      <div className="border-l-4 border-green-400 pl-3 mb-4">
        <p className="font-medium">Meeting with suppliers</p>
        <p className="text-sm text-gray-500">14:00 - 15:00</p>
      </div>

      <div className="border-l-4 border-blue-400 pl-3">
        <p className="font-medium">Check operation</p>
        <p className="text-sm text-gray-500">18:00 - 20:00</p>
      </div>
    </div>
  );
}