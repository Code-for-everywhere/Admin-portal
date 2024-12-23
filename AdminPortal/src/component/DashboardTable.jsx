export default function DashboardTable() {
    const data = [
      {
        id: 1,
        userImg: "https://randomuser.me/api/portraits/men/1.jpg",
        userName: "John Doe",
        country: "USA",
        usage: "200GB",
        paymentMethod: "Credit Card",
        activity: "Active",
      },
      {
        id: 2,
        userImg: "https://randomuser.me/api/portraits/women/2.jpg",
        userName: "Jane Smith",
        country: "Canada",
        usage: "150GB",
        paymentMethod: "PayPal",
        activity: "Inactive",
      },
      {
        id: 3,
        userImg: "https://randomuser.me/api/portraits/men/3.jpg",
        userName: "Michael Brown",
        country: "UK",
        usage: "500GB",
        paymentMethod: "Bank Transfer",
        activity: "Active",
      },
    ];
  
    return (
      <div className="overflow-x-auto my-7">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="border-b bg-gray-200 text-left">
              <th className="px-4 py-2">User Image</th>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Usage</th>
              <th className="px-4 py-2">Payment Method</th>
              <th className="px-4 py-2">Activity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2 flex items-center space-x-2">
                  <img
                    src={user.userImg}
                    alt={user.userName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="hidden sm:inline-block">{user.userName}</span>
                </td>
                <td className="px-4 py-2">{user.userName}</td>
                <td className="px-4 py-2">{user.country}</td>
                <td className="px-4 py-2">{user.usage}</td>
                <td className="px-4 py-2">{user.paymentMethod}</td>
                <td className="px-4 py-2">{user.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  