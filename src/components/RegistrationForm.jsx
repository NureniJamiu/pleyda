"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { registrationSchema } from "@/schema";
import SuccessModal from "./SuccessModal";
import { onSubmit } from "@/helpers";
import { Button } from "./ui/button";

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const pathname = "/hackathon/registration";

  const initialValues = {
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: "",
    group_size: "",
    privacy_policy_accepted: false,
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registrationSchema,
      onSubmit: (values, actions) =>
        onSubmit(values, actions, pathname, setIsLoading, setIsModalOpen),
    });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fieldsDetails = [
    {
      label: "Firstname",
      id: "first_name",
      value: values.first_name,
      error: errors.first_name,
      touched: touched.first_name,
    },
    {
      label: "Lastname",
      id: "last_name",
      value: values.last_name,
      error: errors.last_name,
      touched: touched.last_name,
    },
    {
      label: "Phone",
      id: "phone_number",
      value: values.phone_number,
      error: errors.phone_number,
      touched: touched.phone_number,
    },
    {
      label: "Email",
      id: "email",
      value: values.email,
      error: errors.email,
      touched: touched.email,
    },
  ];

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="md:w-[500px] h-auto md:h-[520px] rounded-lg shadow-lg md:bg-white md:bg-opacity-5 flex items-center justify-center px-12 pb-8 md:pb-0"
      >
        <div className="flex flex-col items-center px-8 md:px-0">
          <div className="text-left w-64 md:w-full mb-4">
            <h2 className="hidden md:block font-clash text-xl text-red-500">
              Register now
            </h2>
            <p className="text-base md:text-xs my-2">
              You{"'"}re just a few steps away from becoming a{" "}
              <span className="text-red-500">PLEYDITE</span>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            {fieldsDetails.map((field) => (
              <div key={field.id} className="text-left">
                <label className="text-xs font-semibold">{field.label}</label>
                <input
                  type="text"
                  id={field.id}
                  value={field.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  className={`border border-zinc-800 bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                    field.error && field.touched && "border-red-500"
                  }`}
                />
                {field.error && field.touched && (
                  <p className="text-xs text-red-500 italic">{field.error}</p>
                )}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-3 px-5 md:px-0 md:w-full md:gap-3 mt-1">
            <div className="text-left">
              <label className="text-xs font-semibold">Gender</label>
              <select
                name="gender"
                id="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border border-zinc-800 bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                  errors.gender && touched.gender && "border-red-500"
                }`}
              >
                <option value="" className="bg-red-300">
                  Select your gender
                </option>
                <option value="male" className="bg-red-300">
                  Male
                </option>
                <option value="female" className="bg-red-300">
                  Female
                </option>
              </select>
              {errors.gender && touched.gender && (
                <p className="text-xs text-red-500 italic">{errors.gender}</p>
              )}
            </div>

            <div className="text-left">
              <label className="text-xs font-semibold">
                Educational Status
              </label>
              <select
                name="educational_status"
                id="educational_status"
                value={values.educational_status}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border border-zinc-800 bg-inherit py-3 px-5 w-full rounded text-xs focus:outline-none mt-2 ${
                  errors.educational_status &&
                  touched.educational_status &&
                  "border-red-500"
                }`}
              >
                <option value="" className="bg-red-300">
                  Select
                </option>
                <option value="1" className="bg-red-300">
                  High School Cert.
                </option>
                <option value="2" className="bg-red-300">
                  Undergraduate
                </option>
                <option value="3" className="bg-red-300">
                  Postgraduate
                </option>
              </select>
              {errors.educational_status && touched.educational_status && (
                <p className="text-xs text-red-500 italic">
                  {errors.educational_status}
                </p>
              )}
            </div>
          </div>
          <div className="text-left px-44 md:px-0 md:w-full text-xs">
            <p className="text-red-400 italic my-2">
              Please review your registration details before submitting
            </p>
            <div className="mb-3">
              <input
                type="checkbox"
                id="privacy_policy_accepted"
                onChange={handleChange}
              />
              <span className="ml-3">
                I agree with the event terms and condition and privacy policy
              </span>
              {errors.privacy_policy_accepted && (
                <p className="text-xs text-red-500 italic">
                  {errors.privacy_policy_accepted}
                </p>
              )}
            </div>
            <Button
              className="btn-gradient rounded px-10 text-sm w-full"
              disabled={isLoading}
            >
              {!isLoading ? "Submit" : "Loading..."}
            </Button>
          </div>
        </div>
      </form>
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default RegistrationForm;
