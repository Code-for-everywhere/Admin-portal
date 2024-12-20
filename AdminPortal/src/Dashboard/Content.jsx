import DashboardCard from "../component/DashboardCard";
import DashboardTable from "../component/DashboardTable";

export default function Content() {
  return (
    <div className="p-4">
      <DashboardCard />

      <DashboardTable />
    </div>
  );
}
