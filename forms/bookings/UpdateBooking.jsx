"use client";
import useAxiosAuth from "@/hooks/authentication/useAxiosAuth";
import { updateBooking } from "@/services/bookings";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function UpdateBooking({ booking, slug, closeModal, refetch }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <Formik
      initialValues={{
        status: booking?.status || "",
        payment_status: booking?.payment_status || "",
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();

          formData.append("status", values.status);
          formData.append("payment_status", values.payment_status);

          await updateBooking(slug, formData, axios);
          setLoading(false);
          toast.success("Booking updated successfully");
          closeModal();
          refetch();
        } catch (error) {
          toast.error("Failed to update booking");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ touched }) => (
        <Form>
          <div className="form-group mb-3">
            <label htmlFor="status" className="form-label">
              Booking Status
            </label>
            <Field as="select" name="status" className="form-select">
              <option value={booking?.status} disabled>
                {booking?.status}
              </option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </Field>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="payment_status" className="form-label">
              Payment Status
            </label>
            <Field as="select" name="payment_status" className="form-select">
              <option value={booking?.payment_status} disabled>
                {booking?.payment_status}
              </option>
              <option value="Paid">Paid</option>
              <option value="Refunded">Refunded</option>
            </Field>
          </div>

          <button
            type="submit"
            className="btn auth-btn btn-sm"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Booking"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateBooking;
