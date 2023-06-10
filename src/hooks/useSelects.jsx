// import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useSelects = () => {

    const { user } = useContext(AuthContext);

    const { refetch, data: selects = [] } = useQuery({
        queryKey: ['selects', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selects?email=${user?.email}`)
            return response.json();
        }
    })

    return [selects, refetch]
};

export default useSelects;