export default function Account() {
  return (
    <div className="space-y-3.5">
      {/* ---------- Account Information ---------- */}
      <section className="rounded border border-gray-500/50">
        <p className="border-b border-gray-500/50 bg-[#F5F5F6] p-3 text-[18px] poppins-regular text-gray-800 leading-6">
          Account Information
        </p>

        <div className="p-3 flex flex-col md:flex-row gap-3">
          {/* Contact */}
          <div className="w-full">
            <h4 className="text-[16px] poppins-medium border-b border-gray-500/50 text-black pb-2.5 mb-4">
              Contact Information
            </h4>
            <p className="mb-2.5">Farukh Sajjad</p>
            <p className="mb-2.5">farukhsajjad110@gmail.com</p>

            <div className="flex items-center gap-2">
              <button className="cursor-pointer hover:underline">Edit</button>
              <span>||</span>
              <button className="cursor-pointer hover:underline">Change Password</button>
            </div>
          </div>

          {/* Newsletters */}
          <div className="w-full">
            <h4 className="text-[16px] poppins-medium border-b border-gray-500/50 text-black pb-2.5 mb-4">
              Newsletters
            </h4>
            <span>You&apos;re not subscribed to our newsletter.</span>
            <button className="mt-2 block cursor-pointer hover:underline">Edit</button>
          </div>
        </div>
      </section>

      {/* ---------- Address Book ---------- */}
      <section className="rounded border border-gray-500/50">
        <div className="flex items-center justify-between border-b border-gray-500/50 bg-[#F5F5F6] p-3">
          <p className="text-[18px] poppins-regular text-gray-800 leading-6">Address Book</p>
          <a href="/customer/address" className="cursor-pointer hover:underline text-xs underline-offset-1">
            Manage Addresses
          </a>
        </div>

        <div className="p-3 flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-1/2">
            <h4 className="text-[16px] poppins-medium border-b border-gray-500/50 text-black pb-2.5 mb-1">
              Default Billing Address
            </h4>
            <p>You have not set a default billing address.</p>
          </div>

          <div className="w-full md:w-1/2">
            <h4 className="text-[16px] poppins-medium border-b border-gray-500/50 text-black pb-2.5 mb-1">
              Default Shipping Address
            </h4>
            <p>You have not set a default Shipping address.</p>
          </div>
        </div>
      </section>

      {/* ---------- Recent Orders ---------- */}
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