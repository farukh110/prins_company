export default function Account() {
  return (
    <div className="space-y-3.5">

      <section className="rounded border border-gray-500/50">
        <div className="flex items-center justify-between border-b border-gray-500/50 bg-[#F5F5F6] p-3">
          <p className="text-[18px] poppins-regular text-gray-800">Recent Orders</p>
          <a href="/customer/order/history" className="cursor-pointer hover:underline text-xs underline-offset-1">
            View All
          </a>
        </div>

        <div className="p-3 overflow-auto">
          <table className="w-full border border-gray-500/50 border-collapse">
            <thead>
              <tr>
                {['Order #', 'Date', 'Ship To', 'Order Total', 'Status', 'Action'].map((th) => (
                  <th
                    key={th}
                    className="border border-gray-500/50 text-left px-2.5 py-2 text-[14px] poppins-medium min-w-28"
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-500">
                  No recent orders.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}