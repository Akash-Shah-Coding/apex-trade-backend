import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUser, setAuthLoading, setAuthError, clearUser } from "../store/authSlice";
import { login, fetchUser } from "../services/authService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Fetch User Query
  const { data: user, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: false,
    onSuccess: (data) => {
      dispatch(setUser({ user: data.user }));
    },
    onError: () => {
      dispatch(clearUser());
    },
  });

  // Login Mutation
  const loginMutation = useMutation({
    mutationFn: login,
    onMutate: () => {
      dispatch(setAuthLoading(true));
    },
    onSuccess: (data) => {
      dispatch(setUser({ user: data.user }));
      toast.success("User signed in successfully!");
      queryClient.invalidateQueries(["user"]);
      navigate("/");
    },
    onError: (error) => {
      dispatch(setAuthError(true));
      toast.error("Invalid password or email");
    },
    onSettled: () => {
      dispatch(setAuthLoading(false));
    },
  });

  return {
    login: loginMutation.mutate,
    user: user?.user,
    isLoading,
    isError,
    isAuthLoading: loginMutation.isLoading,
  };
};
