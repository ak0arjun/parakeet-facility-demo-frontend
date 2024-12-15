"use client";

import { GridColDef } from "@mui/x-data-grid";
import MaterialDataGrid from "../components/material-data-grid.component";
import { PrimaryButton } from "../components/primary-button";
import Image from "next/image";
import ThreeDotMenu from "../components/3dots-menu.components";
import { CreateEditFacilityModal } from "../modals/create-edit-facility.component";
import { useState } from "react";
import { FacilityModel } from "../models/facility.model";

export default function FacilityPage() {
    
    const [selectedFacility, setSelectedFacility] = useState<FacilityModel>();
    const [createFacilityModalOpen, setCreateFacilityModalOpen] = useState<boolean>(false);
    const [editFacilityModalOpen, setEditFacilityModalOpen] = useState<boolean>(false);

    const columns: GridColDef[] = [
        {
            field: "options", headerName: '', renderCell: (params) =>
                <ThreeDotMenu  onClick={(rowId: string, type: string) => handleDeleteUpdateClick(rowId, type)}  id={params.row.id}></ThreeDotMenu>
            , type: "actions", width: 50
        },
        {
            field: 'facilityImage', headerName: 'Facility Image', width: 200, renderCell: (params) => <div className="h-11 w-11 relative">
                <Image
                    src={params.value}
                    fill
                    alt="facility icon"
                />
            </div>
        },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'address', headerName: 'Street Address', width: 200 },
        { field: 'type', headerName: 'Type', width: 200 },
        { field: 'city', headerName: 'City', width: 200 },
        { field: 'state', headerName: 'State', width: 200 },
        { field: 'zipCode', headerName: 'Zip Code', width: 200 },
        { field: 'phone', headerName: 'Phone', width: 200 },
    ];

    const rows = [
        {
            id: "123",
            facilityImage: "https://pub-84cfc7a5a9554d0ba1460972b3b61014.r2.dev/1149757",
            name: 'Test',
            address: "Address test",
            type: "Manufacturing",
            city: "New york",
            state: "new York",
            zipCode: "1203",
            phone: "0986442342432",

        },

    ];

    return (
        <>
            <div className=" px-11 py-16 h-screen overflow-y-auto ">
                <div
                    id="facilityHeader"
                    className="px-2 text-4xl font-bold text-black"
                >
                    Facilities
                </div>
                <div className="p-3"></div>
                <PrimaryButton buttonText="+ Add Facility" onClick={() => openCreateFacilityModal()}></PrimaryButton>
                <div className="p-3"></div>
                <div className="overflow-x-auto w-[calc(100%)]">
                    <MaterialDataGrid columnDefs={columns} data={rows}></MaterialDataGrid>
                </div>
            </div>
            <CreateEditFacilityModal toggleModal={setCreateFacilityModalOpen} open={createFacilityModalOpen} facilityModel={selectedFacility} id={"create-facility-modal-id"} title={"Add Facility"} description="Fill in the form below to create a new facility. The * indicates that the field is required" isCreate={true}></CreateEditFacilityModal>
            <CreateEditFacilityModal toggleModal={setEditFacilityModalOpen} open={editFacilityModalOpen} facilityModel={selectedFacility} id={"edit-facility-modal-id"} title={"Update Facility"} description="Fill in the form below to update facility. The * indicates that the field is required" isCreate={false}></CreateEditFacilityModal>
            </>
    )

    function openCreateFacilityModal() {
        setCreateFacilityModalOpen(true);
    }

    function handleDeleteUpdateClick(rowId: string, type: string) {
        console.log(rowId);
        console.log(type);

        switch(type) {
            case "update": {
               setEditFacilityModalOpen(true);
            }
        }
      
    }
}
