import CustomerFavorites from "@/components/CustomerFavorites";
import NewArrivals from "@/components/NewArrivals";

const Cart: React.FC = () => {

    return (
        <>
            <div
                className="space-y-2 text-center my-4 border-b border-grayscale-600 pb-5 px-4 desk:px-0"
            >
                <h1 className="text-[14px] poppins-semibold text-[#161618] leading-8">
                    Your Shopping Bag is Empty.
                </h1>
                <p
                    className="text-[13px] poppins-light text-[#161618]"
                    data-trk-type="engagement"
                    data-trk-title="Empty Cart"
                >
                    To begin shopping, view our bestsellers and new arrivals below or click
                    <a
                        aria-label="Click Here"
                        className="underline underline-offset-2"
                        tabIndex={0}
                        data-trk-type="link"
                        data-trk-title="Click Here"
                        rel="follow"
                        href="/c/jewelry"
                        data-uw-rm-brl="PR"
                        data-uw-original-href="/c/jewelry"
                    >
                        <strong className="font-medium ms-1">here</strong>
                    </a>{" "}
                    to view the entire collection.
                </p>
            </div>
            <CustomerFavorites />
            <NewArrivals />

        </>);
};

export default Cart;
