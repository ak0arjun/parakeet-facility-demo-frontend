import { axiosInstance } from "../constants/axios.instance";
import { FacilityModel } from "../models/facility.model";

export async function fetchFacilityDetail(id: string): Promise<FacilityModel | null> {
    try {
        const res = await axiosInstance.get("/facility/" + id);
        return res.data;
    } catch { }
    return null;
}


export async function fetchFacilities(): Promise<FacilityModel[]> {
    try {
        const res = await axiosInstance.get("/facility");
        return res.data;
    } catch { }
    return [];
}

export async function deleteFacility(id: number): Promise<void> {
    try {
       await axiosInstance.delete("/facility/" + id);
    } catch { }
}