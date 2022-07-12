import React from "react";
import Button from "../../components/buttons/button";
import TransparentButton from "../../components/buttons/transparent_button";
import "./home_page.scss";

const style = {
  background: "linear-gradient(249.78deg, #FFE145 26.94%, #C86C00 74.07%)",
  backgroundImage: "url(images/shapes/premium_subscription_vector.sv)",
};

function PremiumSubscription(props) {
  const { className } = props;
  return (
    <div
      className={`relative premium-subscription w-full h-[25rem] overflow-hidden ${className}`}
    >
      <img
        src="/images/shapes/premium_subscription_vector.svg"
        className="absolute bottom-0 -z-10"
        alt=""
      />

      <h2 className="text-accent-800 text-3xl font-bold w-full text-center mt-11 mb-9">
        Get a Premium Subscription
      </h2>

      <div className="w-full flex justify-center z-10">
        <div className="w-[80%] flex justify-between">
          <div className="text-black">
            <h3 className="text-2xl font-semibold mb-4">Benefit From</h3>
            <ul className="list-disc list-inside text-[1.1rem]">
              <li>Unlimited Skips</li>
              <li>Listen Offline</li>
              <li>Ad Free</li>
              <li>Renewable</li>
              <li>1 Month Free Trial</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-[1.7rem] text-center font-semibold text-black mb-7">
              30 Days Free trial
            </h3>

            <div className="flex gap-8">
              <Button text="Try Now" function=""/>

              <TransparentButton text="View Plans" function="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumSubscription;
