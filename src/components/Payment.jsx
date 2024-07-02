import { useState } from "react";
import card from "../assets/card_img.png";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  return (
    <>
      <div className="md:pb-[50px] md:pt-[50px] lg:pb-[120px] lg:pt-[100px] bg-n-2 dark:bg-n-9">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            className={`${
              paymentSuccess ? "hidden" : "flex"
            } justify-center items-center h-full md:h-[768px] box-border outline-none capitalize border-none transition py-12`}
          >
            <form
              action=""
              className="p-8 w-[768px] h-full bg-n-2/90 dark:bg-n-2 shadow-2xl rounded-md"
            >
              <div className="flex flex-wrap gap-7">
                <div className="flex-[1_1_250px]">
                  <div className="flex flex-col items-start justify-between h-full gap-6 py-5 border-b border-n-12/10">
                    <h3 className="text-xl pb-2 uppercase font-lato font-semibold tracking-wide">
                      billing address
                    </h3>

                    <div className="space-y-1 w-full">
                      <span className="mb-3 tracking-wide font-medium">
                        full name :
                      </span>
                      <input
                        type="text"
                        placeholder="yash khawale"
                        className="w-full py-2 px-4 text-base capitalize rounded-lg"
                        name="name"
                        autoComplete="true"
                      />
                    </div>
                    <div className="space-y-1 w-full">
                      <span className="mb-3 tracking-wide font-medium">
                        email :
                      </span>
                      <input
                        type="email"
                        placeholder="example@example.com"
                        className="w-full py-2 px-4 text-base capitalize rounded-lg"
                        name="email"
                        autoComplete="true"
                      />
                    </div>
                    <div className="space-y-1 w-full">
                      <span className="mb-3 tracking-wide font-medium">
                        address :
                      </span>
                      <input
                        type="text"
                        placeholder="room - street - locality"
                        className="w-full py-2 px-4 text-base capitalize rounded-lg"
                        name="address"
                        autoComplete="true"
                      />
                    </div>
                    <div className="space-y-1 w-full">
                      <span className="mb-3 tracking-wide font-medium">
                        city :
                      </span>
                      <input
                        type="text"
                        placeholder="pune"
                        className="w-full py-2 px-4 text-base capitalize rounded-lg"
                        name="city"
                      />
                    </div>

                    <div className="flex gap-4">
                      <div className="space-y-1 w-full">
                        <span className="mb-3 tracking-wide font-medium">
                          state :
                        </span>
                        <input
                          type="text"
                          placeholder="maharashtra"
                          className="w-full py-2 px-4 text-base capitalize rounded-lg"
                          name="state"
                        />
                      </div>
                      <div className="space-y-1 w-full">
                        <span className="mb-3 tracking-wide font-medium">
                          Pin code :
                        </span>
                        <input
                          type="text"
                          placeholder="123 456"
                          className="w-full py-2 px-4 text-base capitalize rounded-lg"
                          name="pincode"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-[1_1_250px] h-full">
                  <div className="flex flex-col items-start justify-between h-full gap-6 py-5">
                    <h3 className="text-xl pb-2 uppercase font-lato font-semibold  tracking-wide">
                      payment
                    </h3>

                    <div>
                      <span className="mb-3 tracking-wide font-medium">
                        cards accepted :
                      </span>
                      <img src={card} alt="" className="h-9 mt-2" />
                    </div>
                    <div className="space-y-1 w-full">
                      <span className="mb-3 tracking-wide font-medium">
                        name on card :
                      </span>
                      <input
                        type="text"
                        placeholder="mr. yash khawale"
                        className="w-full py-2 px-4 text-base capitalize rounded-lg"
                        name="card_name"
                      />
                    </div>
                    <div className="space-y-1 w-full">
                      <span className="mb-3 tracking-wide font-medium">
                        credit card number :
                      </span>
                      <input
                        type="number"
                        placeholder="1111-2222-3333-4444"
                        className="w-full py-2 px-4 text-base capitalize rounded-lg"
                        name="card_number"
                      />
                    </div>
                    <div className="space-y-1 w-full">
                      <span className="mb-3 tracking-wide font-medium">
                        exp month :
                      </span>
                      <input
                        type="text"
                        placeholder="january"
                        className="w-full py-2 px-4 text-base capitalize rounded-lg"
                        name="card_expiry_month"
                      />
                    </div>

                    <div className="flex gap-4">
                      <div className="space-y-1 w-full">
                        <span className="mb-3 tracking-wide font-medium">
                          exp year :
                        </span>
                        <input
                          type="number"
                          placeholder="2022"
                          className="w-full py-2 px-4 text-base capitalize rounded-lg"
                          name="card_expiry_year"
                        />
                      </div>
                      <div className="space-y-1 w-full">
                        <span className="mb-3 tracking-wide font-medium">
                          CVV :
                        </span>
                        <input
                          type="text"
                          placeholder="1234"
                          className="w-full py-2 px-4 text-base capitalize rounded-lg"
                          name="cvv"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-full text-center flex items-center justify-center text-xl bg-n-13 text-n-1 mt-1 cursor-pointer hover:text-n-6 hover:text-2xl transition-all capitalize rounded-lg tracking-wide h-14"
                onClick={() => setPaymentSuccess(!paymentSuccess)}
              >
                proceed to checkout
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 50 }}
            transition={{ duration: 0.5 }}
            className={`${
              paymentSuccess ? "flex" : "hidden"
            } w-full relative min-h-[768px]`}
          >
            <div className="w-full flex justify-center absolute top-[100px] left-0">
              <div className="flex w-fit items-center bg-n-1 py-6 md:py-12 px-12 md:px-24 text-xl md:text-3xl rounded-2xl gap-8 shadow-2xl">
                <FaCheckCircle size={50} />
                <div>Payment Successful!</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Payment;
