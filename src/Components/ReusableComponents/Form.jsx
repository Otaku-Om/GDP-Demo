import React from "react";
import { useState } from "react";
import "./styles/Form.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function Form({ text, classSelector }) {
  const History = useNavigate();
  const [CheckSubmit, setCheckSubmit] = useState(true);
  function checkboxChecker() {
    const CheckBox = document.getElementById("tandc");
    CheckBox.checked = false;
  }

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = yup.object({
    fullName: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contact: yup
      .string()
      .required("Contact is required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
    tandc: yup.boolean().oneOf([true], "Required"),
  });

  const Formik = useFormik({
    initialValues: {
      fullName: "",
      contact: "",
      email: "",
      tandc: false,
    },
    validationSchema: validate,
    onSubmit: async (values, action) => {
      setCheckSubmit(false);
      const { fullName, contact, email, tandc } = values;
      const res = await axios({
        method: "post",
        url: "https://v1.nocodeapi.com/roshanprajapati678/google_sheets/ifHPrREdOrqTCyol",
        params: { tabId: "Sheet1" },
        data: [[fullName, contact, email]],
      })
        .then((response) => {
          action.resetForm();
          checkboxChecker();
          setCheckSubmit(true);
          Swal.fire({
            title: "Done",
            text: "Message sent successfully",
            icon: "success",
          });
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 421) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "All field are required",
            });
          } else {
            console.log(error);
          }
        });
    },
  });

  return (
    <div
      className={classSelector === "D" ? "Dialog-Box-Form" : "LetsCatchUp-Form"}
    >
      <p>{text}</p>
      <form onSubmit={Formik.handleSubmit}>
        <div className="Form-Control">
          <input
            type="text"
            name="fullName"
            id=""
            className="InputField"
            placeholder="Full Name *"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange}
            value={Formik.values.fullName}
          />
          {Formik.touched.fullName && Formik.errors.fullName ? (
            <p className="Error">{Formik.errors.fullName}</p>
          ) : null}
        </div>
        <div className="Form-Control">
          <input
            type="tel"
            name="contact"
            id=""
            className="InputField"
            placeholder="Contact Number *"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange}
            value={Formik.values.contact}
          />
          {Formik.touched.contact && Formik.errors.contact ? (
            <p className="Error">{Formik.errors.contact}</p>
          ) : null}
        </div>
        <div className="Form-Control">
          <input
            type="email"
            name="email"
            id=""
            className="InputField"
            placeholder="Email ID *"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange}
            value={Formik.values.email}
          />
          {Formik.touched.email && Formik.errors.email ? (
            <p className="Error">{Formik.errors.email}</p>
          ) : null}
        </div>
        <label htmlFor="tandc" className="CheckboxField">
          I agree to receive message on Whats App
          <Link id="Terms-Conditions" to={"/Terms-&-Conditions"}>
            {" "}
            Terms & Conditions
          </Link>
          <input
            id="tandc"
            name="tandc"
            type="checkbox"
            onChange={Formik.handleChange}
            value={Formik.values.tandc}
          />
          <span className="Checkmark"></span>
          {Formik.touched.tandc && Formik.errors.tandc ? (
            <p className="Error">{Formik.errors.tandc}</p>
          ) : null}
        </label>

        <button
          className="SubmitInput"
          type="submit"
          disabled={CheckSubmit ? false : true}
        >
          {CheckSubmit ? (
            "Send Details"
          ) : (
            <CircularProgress color="inherit" size={20} />
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
