import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import useAxiosSecure from './useAxiosSecure';
const useCart = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { data: cart = [], refetch, } = useQuery({
        queryKey: ['carts', user?.email],

        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            return response.data;
        },
    })
    return [cart, refetch]

}
export default useCart;