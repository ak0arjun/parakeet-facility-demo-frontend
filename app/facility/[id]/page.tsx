"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchFacilityDetail } from "../facility.dao";
import { FacilityModel } from "@/app/models/facility.model";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Divider from '@mui/material/Divider';

export default function FacilityDetailPage() {
    const params = useParams();
    const facilityId = params["id"] as string;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [facilityDetail, setFacilityDetail] = useState<FacilityModel>();

    useEffect(() => {
        getFacilityDetail();
    }, []);

    return (
        <>
            <div className=" ">
                <div className="mx-16 bg-white p-16" >
                    {isLoading &&
                        <div className="text-center h-32">
                            <CircularProgress color="secondary" />
                        </div>
                    }
                    {!isLoading && facilityDetail != null &&
                        <>
                            <div className="text-black text-4xl">
                                Facility Information
                            </div>
                            <div className="p-3"></div>
                            <div className="h-96 w-96 relative">
                                {facilityDetail.photoUrl && <Image fill src={facilityDetail.photoUrl} alt="facility icon" />}
                            </div>
                            <div className="p-3"></div>
                            <div className="text-black text-lg">
                                <span className="text-bold">Name: </span> {facilityDetail.name}
                            </div>
                            <div className="p-3"></div>
                            <Divider />
                            <div className="p-3"></div>
                            <div className="text-black text-lg">
                                <span className="text-bold">Address: </span> {facilityDetail.address}
                            </div>
                            <div className="p-3"></div>
                            <Divider />
                            <div className="p-3"></div>
                            <div className="text-black text-lg">
                                <span className="text-bold">City: </span> {facilityDetail.city}
                            </div>
                            <div className="p-3"></div>
                            <Divider />
                            <div className="p-3"></div>
                            <div className="text-black text-lg">
                                <span className="text-bold">State: </span> {facilityDetail.state}
                            </div>
                            <div className="p-3"></div>
                            <Divider />
                            <div className="p-3"></div>
                            <div className="text-black text-lg">
                                <span className="text-bold">Zip Code: </span> {facilityDetail.zipCode}
                            </div>
                            <div className="p-3"></div>
                            <Divider />
                            <div className="p-3"></div>
                            <div className="text-black text-lg">
                                <span className="text-bold">Phone Number: </span> {facilityDetail.phone}
                            </div>
                            <div className="p-3"></div>
                            <Divider />
                            <div className="p-3"></div>
                            <div className="text-black text-lg">
                                <span className="text-bold">Type: </span> {facilityDetail.type}
                            </div>
                        </>
                    }
                </div>
            </div>

        </>
    );

    async function getFacilityDetail() {
        const _facilityDetail = await fetchFacilityDetail(facilityId);
        if (_facilityDetail) {
            setFacilityDetail(_facilityDetail);
        }
        setIsLoading(false);
    }
}