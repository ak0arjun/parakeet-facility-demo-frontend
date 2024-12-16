import { axiosInstance } from "../constants/axios.instance";
import { FacilityModel } from "../models/facility.model";

export async function createFacility(name: string, type: string, city: string, state: string, phone: string, zipCode: string, address: string, uploadFile: File | undefined): Promise<FacilityModel | string> {

    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('type', type);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('phone', phone);
        formData.append('zipCode', zipCode);
        formData.append('address', address);
        if (uploadFile) {
            formData.append('photo', uploadFile);
        }
        const res = await axiosInstance.post("/facility", formData);
        return res.data;
    } catch (error) {
        let message = 'Unknown request encountered';
        if (error instanceof Error) {
            message = error.message
        }
        return message;
    }

}


export async function updateFacility(id: number, name: string | undefined, type: string | undefined, city: string | undefined, state: string | undefined, phone: string | undefined, zipCode: string | undefined, address: string | undefined, uploadFile: File | undefined): Promise<FacilityModel | string> {

    try {
        const formData = new FormData();
        if (!name && !type && !city && !state && !uploadFile && !phone && !address && !zipCode) {
            return 'No changes detected';
        }
        if (name) {
            formData.append('name', name);
        }
        if (type) {
            formData.append('type', type);
        }
        if (city) {
            formData.append('city', city);
        }
        if (state) {
            formData.append('state', state);
        }
        if (phone) {
            formData.append('phone', phone);
        }
        if (zipCode) {
            formData.append('zipCode', zipCode);
        }
        if (address) {
            formData.append('address', address);
        }
        if (uploadFile) {
            formData.append('photo', uploadFile);
        }
        const res = await axiosInstance.patch("/facility/"+id.toString(), formData);
        return res.data;
    } catch (error) {
        let message = 'Unknown request encountered';
        if (error instanceof Error) {
            message = error.message
        }
        return message;
    }

}