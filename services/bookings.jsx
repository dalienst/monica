"use client";
import { apiActions } from "@/tools/api";

export const createBooking = async (formData) => {
  await apiActions?.post("/api/bookings/create/", formData);
};

export const updateBooking = async (slug, formData, axios) => {
  await apiActions?.patch(`/api/bookings/${slug}/`, formData, axios);
};

export const getBookings = async (axios) => {
  const response = await apiActions?.get("/api/bookings/", axios);
  return response?.data?.results;
};

export const getBookingDetail = async (slug, axios) => {
  const response = await apiActions?.get(`/api/bookings/${slug}/`, axios);
  return response?.data;
};

export const clientGetBookingDetail = async (reference) => {
  // Fetches the details about their booking
  const response = await apiActions?.get(`/api/bookings/detail/${reference}/`);
  return response?.data;
};
