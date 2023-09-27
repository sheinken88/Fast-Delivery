import axios from 'axios'
import { API_URL } from 'utils/config'
import type { FormValues } from '../../app/(pages)/profile/page'

export const updateUserProfile = async (
    userId: string,
    userData: FormValues
) => {
    try {
        const response = await axios.put(
            `${API_URL}/drivers/${userId}`,
            userData,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        return response.data
    } catch (error) {
        console.error('updateUserProfile service error', error)
        throw error
    }
}
