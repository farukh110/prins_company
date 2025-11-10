export default function Address() {

  return (
    <div className="space-y-3.5">

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

    </div>
  );
};