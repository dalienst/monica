"use client";
import {
  getAllTourDetail,
  getAllTours,
  getFeaturedTours,
  getTourDetail,
  getTours,
} from "@/services/tours";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../authentication/useAxiosAuth";

export function useFetchAllTours() {
  return useQuery({
    queryKey: ["tours"],
    queryFn: () => getAllTours(),
  });
}

export function useFetchFeaturedTours() {
  return useQuery({
    queryKey: ["tours"],
    queryFn: () => getFeaturedTours(),
  });
}

export function useFetchAllTourDetail(reference) {
  return useQuery({
    queryKey: ["tour", reference],
    queryFn: () => getAllTourDetail(reference),
    enabled: !!reference,
  });
}

export function useFetchTours() {
  const axios = useAxiosAuth();
  return useQuery({
    queryKey: ["tours"],
    queryFn: () => getTours(axios),
  });
}

export function useFetchTourDetail(slug) {
  const axios = useAxiosAuth();
  return useQuery({
    queryKey: ["tour", slug],
    queryFn: () => getTourDetail(slug, axios),
    enabled: !!slug,
  });
}
