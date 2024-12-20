export default function DashboardCard() {
    return (
      <div className="flex flex-wrap gap-16 w-full mb-8">
        <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 h-60 rounded bg-slate-500 p-4">
          <p className="text-white text-2xl">
            <span className="text-3xl font-bold">26K </span>
            <span>(12.4%)</span>
          </p>
          <p className="text-white text-2xl">Users</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 h-60 rounded bg-orange-500 p-4">
          <p className="text-white text-2xl">
            <span className="text-3xl font-bold">$6200 </span> <span>(44.4%)</span>
          </p>
          <p className="text-white text-2xl">Income</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 h-60 rounded bg-red-400 p-4">
          <p className="text-white text-2xl">
            <span className="text-3xl font-bold">2.4%</span> <span>(84.2%)</span>
          </p>
          <p className="text-white text-2xl">Conversion Rate</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 h-60 rounded bg-blue-500 p-4">
          <p className="text-white text-2xl">
            <span className="text-3xl font-bold">44K</span> <span>(-22.3%)</span>
          </p>
          <p className="text-white text-2xl">Session</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 lg:w-1/6 h-60 rounded bg-blue-500 p-4">
          <p className="text-white text-2xl">
            <span className="text-3xl font-bold">44K</span> <span>(-22.3%)</span>
          </p>
          <p className="text-white text-2xl">Session</p>
        </div>
        
      </div>
    );
  }
  