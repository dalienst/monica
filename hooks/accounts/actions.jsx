import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import useAxiosAuth from "../authentication/useAxiosAuth";
import useUserId from "../authentication/useUserId";

export function useFetchProfile() {
  const axios = useAxiosAuth();
  const userId = useUserId();

  return useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getUser(userId, axios),
    enabled: !!userId,
  });
}
