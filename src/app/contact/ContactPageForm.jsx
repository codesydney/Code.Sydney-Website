"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  message: z.string().trim().min(10, { message: "Message must be longer" }),
});

const contactDefaultValues = {
  name: "",
  email: "",
  message: "",
};

const ContactPageForm = () => {
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaultValues,
  });

  useEffect(() => {
    if (isSubmitSuccessful && !formError) {
      console.log("It is marking the form as successful");
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmit = async (data, event) => {
    setFormError("");
    setFormSuccess("");
    const formEl = event.target;
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      await emailjs.sendForm("service_bp0gj2j", "template_oo327od", formEl, {
        publicKey: "user_nEmQ6yi4aBPvlCKCkUAfK",
      });
      setFormSuccess(
        "Thank you your submission, you will hear back from us shortly"
      );
    } catch (error) {
      setFormError(
        "There was an error with the form submission, please email us directly at info@code.sydney"
      );
    }
  };

  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 pt-12 md:px-6 md:pt-10 lg:px-10 lg:pt-16 grid gap-4 md:grid-cols-2 lg:gap-12 xl:gap-16 z-50">
      <div className="">
        <div className="px-4 py-2 rounded  w-fit text-custom-light font-light uppercase mb-2 border-custom-primary border-solid border-2">
          Get Started
        </div>
        <h2 className="font-semibold max-w-[300px] text-4xl md:text-4xl mb-4 bg-gradient-to-tl from-custom-primary via-custom-primary via-10% to-custom-light bg-clip-text text-transparent">
          Lets start the conversation
        </h2>
        <p className="font-light text-custom-light/80">
          Fill out the form and we will get back to you as soon as we can.
        </p>
      </div>
      <div className="">
        <FormNotification type="success" closeForm={() => setFormSuccess("")}>
          {formSuccess && formSuccess}
        </FormNotification>
        <FormNotification type="error" closeForm={() => setFormError("")}>
          {formError && formError}
        </FormNotification>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4 z-50">
            <label className="mb-1" htmlFor="name">
              Name
            </label>
            <input
              className={`bg-custom-primary/10 text-custom-light/90 font-light  rounded p-2 mb-1 z-20 outline-none ring-custom-primary focus:ring-2 ${
                errors.name
                  ? "ring-2 ring-red-500 focus:outline-custom-light"
                  : ""
              }`}
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <div className="text-red-500 font-light text-sm">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="flex flex-col mb-4 z-50">
            <label className="mb-1" htmlFor="email">
              Email
            </label>
            <input
              className={`bg-custom-primary/10  text-custom-light/90 font-light  rounded p-2 mb-1 z-20 outline-none ring-custom-primary focus:ring-2 ${
                errors.email
                  ? "ring-2 ring-red-500 focus:outline-custom-light"
                  : ""
              }`}
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <div className="text-red-500 font-light text-sm">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="flex flex-col mb-4 z-50">
            <label className="mb-1" htmlFor="message">
              Tell us how we can help
            </label>
            <textarea
              className={`bg-custom-primary/10 text-custom-light/90 font-light rounded p-2 mb-1 z-20 outline-none ring-custom-primary focus:ring-2 ${
                errors.message
                  ? "ring-2 ring-red-500 focus:outline-custom-light"
                  : ""
              }`}
              id="message"
              rows="5"
              {...register("message")}
            />
            {errors.message && (
              <div className="text-red-500 font-light text-sm">
                {errors.message.message}
              </div>
            )}
          </div>
          <button
            className={`px-5 py-3 text-custom-light rounded-lg mt-2 bg-gradient-to-br from-custom-primary/50 via-custom-primary/70 to-custom-primary hover:bg-gradient-to-bl hover:bg-custom-primary transition-all duration-200 w-fit ml-auto flex gap-2 items-center`}
            disabled={isSubmitting}
          >
            Submit {isSubmitting && <LoadingSpinner />}
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactPageForm;

const FormNotification = ({ type, children, closeForm }) => {
  if (!children) return;

  return (
    <div
      className={`px-2 pr-6 py-4 border-solid border-2 rounded-lg mb-2 relative ${
        type === "success"
          ? "border-custom-primary bg-custom-primary/20 text-custom-light"
          : "border-red-500 bg-red-500/20 text-custom-light"
      }`}
    >
      <button className="absolute top-2 right-2" onClick={closeForm}>
        <IoClose className="text-custom-light w-4 h-4" />
      </button>
      {children}
    </div>
  );
};
const LoadingSpinner = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-custom-light"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
