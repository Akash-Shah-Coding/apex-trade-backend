import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setUser, setAuthLoading, setAuthError, clearUser } from '../store/authSlice';
import { login, fetchUser } from '../services/authService';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // Login Mutation
    const loginMutation = useMutation(
        {
            mutationFn: login,
            onMutate: () => {
                dispatch(setAuthLoading(true));
            },
            onSuccess: (data) => {
                dispatch(setUser({ user: data.user }));
                toast.success('User signed in successfully!');
                navigate('/');
            },
            onError: (error) => {
                dispatch(setAuthError(true));
                toast.error('Invalid password or email');
            },
            onSettled: () => {
                dispatch(setAuthLoading(false));
            }
        }
    );

    // Fetch User Query
    const userQuery = useQuery(
        {
            queryKey: ['user'],
            queryFn: fetchUser,
            retry: false,
            onSuccess: (data) => {
                dispatch(setUser({ user: data.user }));
            },
            onError: () => {
                dispatch(clearUser());
            }
        }
    );

    return {
        login: loginMutation.mutate,
        user: userQuery.data,
        isLoading: userQuery.isLoading,
        isError: userQuery.isError,
        isAuthLoading: loginMutation.isLoading,
    };
};
