export default function DashboardCard () {
    return (
        <div className="flex gap-3 h-screen w-full">
        <div className="w-1/4 h-1/4 rounded bg-slate-500 p-3 grow">
          <p className="text-white text-2xl">
            <span className="text-3xl font-bold">26K </span>
            <span>(12.4%)</span>
          </p>
          <p className="text-white text-2xl">Users</p>
        </div>
        <div className="w-1/4 h-1/4 rounded bg-orange-500 p-3 grow">
          <p className="text-white text-2xl">
            <span className="text-3xl font-bold">$6200 </span> <span>(44.4%)</span>
          </p>
          <p className="text-white text-2xl">Income</p>
        </div>
        <div className="w-1/4 h-1/4 rounded bg-red-400 p-3 grow">
          <p className="text-white text-2xl">
            <span className="text-3xl font-bold"> 2.4%</span> <span>(84.2%)</span>
          </p>
          <p className="text-white text-2xl">Conversion Rate</p>
        </div>
        <div className="w-1/4 h-1/4 rounded bg-blue-500 p-3 grow">
          <p className="text-white text-2xl">
            <span className="text-3xl font-bold">44K</span> <span>(-22.3%)</span>
          </p>
          <p className="text-white text-2xl">Session</p>
        </div>
      </div>

    )
}