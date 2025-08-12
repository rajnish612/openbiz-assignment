"use client";
import React, { useState } from "react";
import formFields from "../webscrapping//formFields.json";
const FormSection = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  console.log(formFields);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(checked);

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const validate = () => {
    let newErrors = {};
    formFields.forEach((field) => {
      const value = formData[field?.name];
      console.log("field", field);
      console.log("value", value);
      if (field?.type === "checkbox" && !value) {
        newErrors[field?.name] = "You must Agree Declerations.";
      } else if (!value) {
        newErrors[field?.name] = "This field is required";
      }
    });

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
  };
  console.log("errors", errors);

  return (
    <section className="flex justify-center  overflow-hidden py-10 flex-col items-center">
      {/* form section */}
      <div
        className="flex  shadow-md
       rounded-md flex-col w-[90%] lg:w-4xl xl:w-6xl bg-[#007bff]"
      >
        {/* form heading */}
        <div className="p-2">
          <span>Aadhaar Verification With OTP</span>
        </div>
        {/* main form section */}
        <div className="bg-white px-5 py-7">
          <form className="flex space-x-2 space-y-2 flex-wrap md:flex-nowrap ">
            {formFields.map((inputs) => {
              return (
                inputs?.type === "text" && (
                  <div className="space-y-2 w-full flex flex-col">
                    <label
                      htmlFor={inputs?.id}
                      className="font-bold text-black"
                    >
                      1. {inputs?.label}{" "}
                    </label>
                    <input
                      onChange={handleChange}
                      name={inputs?.name}
                      maxLength={inputs?.maxLength}
                      type={inputs?.type}
                      required={inputs?.required}
                      id={inputs?.id}
                      className="w-full border-1 p-1 rounded-md placeholder:text-gray-500 border-[#ced4da]"
                      placeholder={inputs?.placeholder}
                    />

                    {errors[inputs?.name] && (
                      <span className="text-red-500">
                        {errors[inputs?.name]}
                      </span>
                    )}
                    {/* )} */}
                  </div>
                )
              );
            })}
          </form>

          {/* form rules section */}
          <div className="flex justify-center items-center px-5 md:px-10  py-5">
            <ul className="list-disc text-black space-y-4">
              <li>
                <span>
                  Aadhaar number shall be required for Udyam Registration.
                </span>
              </li>
              <li>
                <span>
                  The Aadhaar number shall be of the proprietor in the case of a
                  proprietorship firm, of the managing partner in the case of a
                  partnership firm and of a karta in the case of a Hindu
                  Undivided Family (HUF).
                </span>
              </li>
              <li>
                <span>
                  In case of a Company or a Limited Liability Partnership or a
                  Cooperative Society or a Society or a Trust, the organisation
                  or its authorised signatory shall provide its GSTIN(As per
                  applicablity of CGST Act 2017 and as notified by the ministry
                  of MSME vide S.O. 1055(E) dated 05th March 2021) and PAN along
                  with its Aadhaar number.
                </span>
              </li>
            </ul>
          </div>

          <div className=" flex flex-col w-full items-start text-black">
            {formFields?.map((inputs) => {
              return (
                <>
                  {inputs?.type === "checkbox" ? (
                    <div className="space-x-2">
                      <input
                        onChange={handleChange}
                        name={inputs?.name}
                        type={inputs?.type}
                        required={inputs?.required}
                        id={inputs?.id}
                      />
                      <label htmlFor={inputs?.id}>{inputs?.label}</label>
                      {errors[inputs?.name] && (
                        <div>
                          {" "}
                          <span className="text-red-500">
                            {errors[inputs?.name]}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    inputs?.type === "submit" && (
                      <input
                        onClick={handleSubmit}
                        onChange={handleChange}
                        name={inputs?.name}
                        required={inputs?.required}
                        id={inputs?.id}
                        type={inputs?.type}
                        className="mt-5 bg-blue-500 hover:bg-blue-600 tranistion-all p-2 rounded-md text-white cursor-pointer"
                        value={inputs?.value}
                      ></input>
                    )
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
      <marquee direction="left" className="mt-5" scrollamount="5">
        <span className="text-blue-500 hover:text-blue-600 font-black">
          <a href="#">
            Activities (NIC codes) not covered under MSMED Act, 2006 for Udyam
            Registration
          </a>
        </span>
      </marquee>
    </section>
  );
};

export default FormSection;
