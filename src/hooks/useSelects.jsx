// import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelects = () => {

    // const token = localStorage.getItem('access-token');

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selects = [] } = useQuery({
        queryKey: ['selects', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/selects?email=${user?.email}`)
            console.log('response from axios', response);
            return response.data;
        }
    })

    return [selects, refetch]
};

export default useSelects;