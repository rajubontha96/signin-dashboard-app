import Sidebar from "../components/Sidebar";
import TopCards from "../components/TopCards";
import ActivityChart from "../components/ActivityChart";
import ProductChart from "../components/ProductChart";
import Schedule from "../components/Schedule";
import Header from "../components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex gap-6">
        <Sidebar />

        <div className="flex-1">
          <Header />
          <TopCards />
          <ActivityChart />

          <div className="flex gap-6">
            <ProductChart />
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
}