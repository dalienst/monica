"use client";
import { apiMultipartActions } from "@/tools/api";

export const createTour = async (formData, axios) => {
  await apiMultipartActions?.post("/api/tours/", formData, axios);
};

export const getTours = async (axios) => {
  const response = await apiMultipartActions?.get("/api/tours/", axios);
  return response?.data?.results || [];
};

export const getTourDetail = async (slug, axios) => {
  const response = await apiMultipartActions?.get(`/api/tours/${slug}/`, axios);
  return response?.data || {};
};

export const updateTour = async (slug, formData, axios) => {
  await apiMultipartActions?.patch(`/api/tours/${slug}/`, formData, axios);
};

// Public endpoints
export const getAllTours = async () => {
  const response = await apiMultipartActions?.get("/api/tours/list/");
  return response?.data?.results || [];
};

export const getAllTourDetail = async (reference) => {
  const response = await apiMultipartActions?.get(
    `/api/tours/detail/${reference}/`
  );
  return response?.data || {};
};
