"use client";

import { GridColDef } from "@mui/x-data-grid";
import MaterialDataGrid from "../components/material-data-grid.component";
import { PrimaryButton } from "../components/primary-button";
import Image from "next/image";
import ThreeDotMenu from "../components/3dots-menu.component";
import { CreateEditFacilityModal } from "../modals/create-edit-facility.component";
import { useEffect, useState } from "react";
import { FacilityModel } from "../models/facility.model";
import MessageModal from "../modals/message-modal.component";
import { deleteFacility, fetchFacilities } from "./facility.dao";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

export default function FacilityPage() {

    const [selectedFacility, setSelectedFacility] = useState<FacilityModel | undefined>();
    const [createFacilityModalOpen, setCreateFacilityModalOpen] = useState<boolean>(false);
    const [editFacilityModalOpen, setEditFacilityModalOpen] = useState<boolean>(false);
    const [messageModalOpen, setMessageModalOpen] = useState<boolean>(false);
    const [fetchingFacilities, setFetchingFacilities] = useState<boolean>(true);
    const [facilities, setFacilities] = useState<FacilityModel[]>([]);
    const [messageModalTitle, setMessageModalTitle] = useState<string>('');
    const [messageModalDescription, setMessageModalDescription] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        fetchAllFacilities();
    }, []);

    const columns: GridColDef[] = [
        {
            field: "options", headerName: '', renderCell: (params) =>
                <ThreeDotMenu onClick={(rowId: string, type: string) => handleDeleteUpdateClick(rowId, type)} id={params.row.id}></ThreeDotMenu>
            , type: "actions", width: 50
        },
        {
            field: 'photoUrl', headerName: 'Facility Image', width: 200, renderCell: (params) => {
                if (params.value) {
                    return <div className="p-[5px] text-center">
                        <div className="h-11 w-11 relative m-auto">
                        <Image
                            src={params.value}
                            fill
                            alt="facility icon"
                        />
                    </div>
                    </div>;
                }
                return <div></div>
            }
        },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'address', headerName: 'Street Address', width: 200 },
        { field: 'type', headerName: 'Type', width: 200 },
        { field: 'city', headerName: 'City', width: 200 },
        { field: 'state', headerName: 'State', width: 200 },
        { field: 'zipCode', headerName: 'Zip Code', width: 200 },
        { field: 'phone', headerName: 'Phone', width: 200 },
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
                {fetchingFacilities &&
                    <div className="text-center h-32">
                        <CircularProgress color="secondary" />
                    </div>
                }
                {!fetchingFacilities &&
                    <div className="overflow-x-auto w-[calc(100%)]">
                        <MaterialDataGrid columnDefs={columns} data={facilities} rowClick={(rowId: number) => handleRowClick(rowId)}></MaterialDataGrid>
                    </div>
                }
            </div>
            <CreateEditFacilityModal createdUpdatedFacility={() => handleNewFacilityCreation()} toggleModal={setCreateFacilityModalOpen} open={createFacilityModalOpen} facilityModel={selectedFacility} id={"create-facility-modal-id"} title={"Add Facility"} description="Fill in the form below to create a new facility. The * indicates that the field is required" isCreate={true}></CreateEditFacilityModal>
            <CreateEditFacilityModal createdUpdatedFacility={() => handleFacilityUpdate()} toggleModal={setEditFacilityModalOpen} open={editFacilityModalOpen} facilityModel={selectedFacility} id={"edit-facility-modal-id"} title={"Update Facility"} description="Fill in the form below to update facility. The * indicates that the field is required" isCreate={false}></CreateEditFacilityModal>
            <MessageModal toggleModal={setMessageModalOpen} open={messageModalOpen} title={messageModalTitle} description={messageModalDescription}></MessageModal>
        </>
    )

    function handleNewFacilityCreation() {
        setMessageModalDescription('New facility added');
        setMessageModalTitle('Task completed');
        setMessageModalOpen(true);
        fetchAllFacilities();
    }


    function handleFacilityUpdate() {
        setMessageModalDescription('Facility updated');
        setMessageModalTitle('Task completed');
        setMessageModalOpen(true);
        fetchAllFacilities();
    }

    function openCreateFacilityModal() {
        setSelectedFacility(undefined);
        setCreateFacilityModalOpen(true);
    }

    async function handleDeleteUpdateClick(rowId: string, type: string) {
        const _selectedFacility = facilities.find((facility: FacilityModel) => facility.id.toString() == rowId.toString().trim());
        setSelectedFacility(_selectedFacility);
        switch (type) {
            case "update": {
                setEditFacilityModalOpen(true);
                break;
            }
            case "delete": {
                if (_selectedFacility) {
                    setFetchingFacilities(true);
                    await deleteFacility(_selectedFacility.id);
                    fetchAllFacilities();
                }
                break;
            }
        }

    }

    async function fetchAllFacilities() {
        setFetchingFacilities(true);
        const _facilities = await fetchFacilities();
        setFacilities(_facilities);
        setFetchingFacilities(false);
    }

    function handleRowClick(rowId: number) {
        router.push('/facility/' + rowId);
    }
}
