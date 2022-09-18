import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./login.css";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (event) => {
    localStorage.setItem("email", "logged");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .min(6, "Minimo 6")
      .required("Por favor poner algun email"),
    password: Yup.string()
      .min(8, "Minimo 8")
      .required("Por favor poner algun email"),
  });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    formik;

  return (
    <div className="container">
      <Link to="/skeleton" className="link">
        Skeleton
      </Link>
      <br />
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="m-5">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <br />
          <input
            type="email"
            className={
              errors.email && touched.email ? "danger" : "form-control"
            }
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            value={values.email}
          />
        </div>
        {errors.email && touched.email && (
          <div className="msError"> {errors.email} </div>
        )}
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <br />
          <input
            type="password"
            className={
              errors.password && touched.password ? "danger" : "form-control"
            }
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && (
            <>
              {" "}
              <div className="msError"> {errors.password} </div>
            </>
          )}
        </div>

        <div className="d-grid gap-2">
          <button
            type="submit"
            name=""
            disabled={errors.email || errors.password ? true : false}
            className={
              errors.email || errors.password ? "desactived" : "activate"
            }
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
