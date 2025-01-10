"use client";
import { createBooking } from "@/services/bookings";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreateBooking({ tour, closeModal }) {
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        tour: tour?.reference,
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "",
        payment_method: "",
        currency: "",
        special_requests: "",
        request_jeep: false,
      }}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        try {
          const formData = new FormData();

          formData.append("tour", values.tour);
          formData.append("name", values.name);
          formData.append("email", values.email);
          formData.append("phone", values.phone);
          formData.append("date", values.date);
          formData.append("guests", values.guests);
          formData.append("payment_method", values.payment_method);
          formData.append("currency", values.currency);
          formData.append("special_requests", values.special_requests);
          formData.append("request_jeep", values.request_jeep);

          await createBooking(formData);
          toast.success("Booking created successfully. An email will be sent.");
          resetForm();
          closeModal();
        } catch (error) {
          toast.error("Failed to create booking.");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">
              Enter your name
            </label>
            <Field
              name="name"
              type="text"
              className="form-control"
              placeholder="John Doe"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Enter your email
            </label>
            <Field
              name="email"
              type="email"
              className="form-control"
              placeholder="jdoe@example.com"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="phone" className="form-label">
              Enter your phone number
            </label>
            <Field
              name="phone"
              type="tel"
              className="form-control"
              placeholder="+1 (123) 456-7890"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="date" className="form-label">
              Select a date
            </label>
            <Field
              name="date"
              type="date"
              className="form-control"
              placeholder="Select a date"
            />
          </div>

          <div className="row">
            <div className="form-group mb-3 col-md-4 col-sm-12">
              <label htmlFor="guests" className="form-label">
                Number of guests
              </label>
              <Field
                name="guests"
                type="number"
                className="form-control"
                placeholder="2"
              />
            </div>

            <div className="form-group mb-3 col-md-4 col-sm-12">
              <label htmlFor="payment_method" className="form-label">
                Payment method
              </label>
              <Field name="payment_method" as="select" className="form-select">
                <option value="">Select a payment method</option>
                <option value="cash">Cash</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="paypal">PayPal</option>
              </Field>
            </div>

            <div className="form-group mb-3 col-md-4 col-sm-12">
              <label htmlFor="currency" className="form-label">
                Currency
              </label>
              <Field name="currency" as="select" className="form-select">
                <option value="">Select a currency</option>
                <option value="DOLLAR">USD</option>
                <option value="EURO">EUR</option>
                <option value="POUND">Pound Sterling</option>
                <option value="KSH">KSH</option>
              </Field>
            </div>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="special_requests" className="form-label">
              Special requests
            </label>
            <Field
              name="special_requests"
              as="textarea"
              className="form-control"
              placeholder="Special requests"
            />
          </div>

          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="request_jeep"
              name="request_jeep"
              checked={values.request_jeep}
              onChange={(e) => {
                setFieldValue("request_jeep", e.target.checked);
              }}
            />
            <label htmlFor="request_jeep" className="form-check-label">
              Request a Jeep
            </label>
          </div>

          <button
            type="submit"
            className="btn auth-btn btn-sm"
            disabled={loading}
          >
            {loading ? "Creating booking..." : "Create Booking"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CreateBooking;
