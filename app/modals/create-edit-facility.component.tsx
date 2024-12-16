"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { FacilityModel } from "../models/facility.model";
import { Alert, Box, CircularProgress, Modal, Typography } from "@mui/material";
import { PrimaryButton } from "../components/primary-button";
import { SecondaryButton } from "../components/secondary-button";
import ImagePicker from "../components/image-picker.component";
import PrimaryInput from "../components/primary-input.component";
import PrimarySelector from "../components/primary-selector.component";
import { createFacility, updateFacility } from "./modal.dao";

type CreateEditFacilityModalConfig = {
    description: string;
    id: string;
    title: string;
    isCreate: boolean;
    open: boolean;
    toggleModal: Dispatch<SetStateAction<boolean>>;
    facilityModel: FacilityModel | undefined;
    createdUpdatedFacility: (facilityModal: FacilityModel) => void;
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export function CreateEditFacilityModal(createEditFacilityModalConfig: CreateEditFacilityModalConfig) {
    const [selectedFile, setSelectedFile] = useState<File>();
    const [selectedName, setSelectedName] = useState<string | undefined>();
    const [selectedAddress, setSelectedAddress] = useState<string | undefined>();
    const [selectedCity, setSelectedCity] = useState<string | undefined>();
    const [selectedPhone, setSelectedPhone] = useState<string | undefined>();
    const [selectedZipCode, setSelectedZipCode] = useState<string | undefined>();
    const [selectedState, setSelectedState] = useState<string | undefined>();
    const [selectedType, setSelectedType] = useState<string | undefined>();
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const [isProcessingRequest, setProcessingRequest] = useState<boolean>(false);


    const typeOptions = {
        "manufacturing_plants": "Manufacturing Plants",
        "warehouses": "Warehouses",
        "distribution_centers": "Distribution Centers",
        "research_and_development_centers": "Research and Development Centers",
        "maintenance_and_repair_facilities": "Maintenance and Repair Facilities",
        "logistics_hubs": "Logistics Hubs",
        "quality_control_laboratories": "Quality Control Laboratories",
        "refineries": "Refineries",
        "energy_plants": "Energy Plants",
        "water_treatment_plants": "Water Treatment Plants",
        "smelting_and_refining_facilities": "Smelting and Refining Facilities",
        "assembly_plants": "Assembly Plants"
    };

    const stateOptions = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AS": "American Samoa",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "DC": "District Of Columbia",
        "FM": "Federated States Of Micronesia",
        "FL": "Florida",
        "GA": "Georgia",
        "GU": "Guam",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MH": "Marshall Islands",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "MP": "Northern Mariana Islands",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PW": "Palau",
        "PA": "Pennsylvania",
        "PR": "Puerto Rico",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VI": "Virgin Islands",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    }

    return (
        <div>
            <Modal
                open={createEditFacilityModalConfig.open}
                onClose={() => { createEditFacilityModalConfig.toggleModal(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <Typography id="modal-modal-title" variant="h3" component="h2" className="text-black">
                            {createEditFacilityModalConfig.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className="text-slate-500">
                            {createEditFacilityModalConfig.description}
                        </Typography>
                        <div className="p-3"></div>
                        <ImagePicker image={createEditFacilityModalConfig.facilityModel?.photoUrl ?? undefined} onSelection={(file: File) => updateFacilityImage(file)}></ImagePicker>
                        <div className="p-3"></div>
                        <PrimaryInput isRequired={true} onTextChange={(name: string) => setSelectedName(name)} label="Name" defaultValue={createEditFacilityModalConfig.facilityModel?.name ?? ''}></PrimaryInput>
                        <div className="p-3"></div>
                        <PrimarySelector options={typeOptions} defaultValue={createEditFacilityModalConfig.facilityModel?.type ?? ""} label="Type" onSelectionChange={(selection: string) => setSelectedType(selection)}></PrimarySelector>
                        <div className="p-3"></div>
                        <PrimaryInput isRequired={true} onTextChange={(address: string) => setSelectedAddress(address)} label="Street Address" defaultValue={createEditFacilityModalConfig.facilityModel?.address ?? ''}></PrimaryInput>
                        <div className="p-3"></div>
                        <PrimaryInput isRequired={true} onTextChange={(city: string) => setSelectedCity(city)} label="City" defaultValue={createEditFacilityModalConfig.facilityModel?.city ?? ''}></PrimaryInput>
                        <div className="p-3"></div>
                        <PrimarySelector options={stateOptions} defaultValue={createEditFacilityModalConfig.facilityModel?.state ?? ""} label="State" onSelectionChange={(state: string) => setSelectedState(state)}></PrimarySelector>
                        <div className="p-3"></div>
                        <PrimaryInput isRequired={true} onTextChange={(zipCode: string) => setSelectedZipCode(zipCode)} label="Zip Code" defaultValue={createEditFacilityModalConfig.facilityModel?.zipCode ?? ''}></PrimaryInput>
                        <div className="p-3"></div>
                        <PrimaryInput isRequired={true} onTextChange={(phone: string) => setSelectedPhone(phone)} label="Phone Number" defaultValue={createEditFacilityModalConfig.facilityModel?.phone ?? ''}></PrimaryInput>

                        <div className="h-16"></div>

                        <div className="fixed bottom-0 left-0 w-full h-16 text-right px-4 flex flex-row py-2">
                            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                            <div className="flex-1"></div>
                            <SecondaryButton buttonText="CANCEL" onClick={() => createEditFacilityModalConfig.toggleModal(false)}></SecondaryButton>
                            <div className="p-3"> </div>
                            {isProcessingRequest && <div>
                                <CircularProgress color="secondary" />
                            </div>}
                            {!isProcessingRequest &&
                                <PrimaryButton buttonText={createEditFacilityModalConfig.isCreate ? 'ADD' : 'UPDATE'} onClick={() => handleModalSubmit()}></PrimaryButton>
                            }
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );

    async function handleModalSubmit() {
        if (createEditFacilityModalConfig.isCreate) {

            setErrorMessage(undefined);
            if (!selectedName) {
                setErrorMessage("Please enter proper name.");
                return;
            }
            if (!selectedCity) {
                setErrorMessage("Please enter proper city.");
                return;
            }
            if (!selectedAddress) {
                setErrorMessage("Please enter proper address.");
                return;
            }
            if (!selectedState) {
                setErrorMessage("Please select a state.");
                return;
            }
            if (!selectedPhone) {
                setErrorMessage("Please enter proper phone number.");
                return;
            }
            if (!selectedType) {
                setErrorMessage("Please select a type.");
                return;
            }
            if (!selectedZipCode) {
                setErrorMessage("Please enter proper zip code.");
                return;
            }
            setProcessingRequest(true);
            const newFacility = await createFacility(selectedName, selectedType, selectedCity, selectedState, selectedPhone, selectedZipCode, selectedAddress, selectedFile);
            if (typeof newFacility == 'string') {
                setErrorMessage(newFacility);
            } else {
                createEditFacilityModalConfig.createdUpdatedFacility(newFacility);
                createEditFacilityModalConfig.toggleModal(false);
            }
            setProcessingRequest(false);
        } else if (createEditFacilityModalConfig.facilityModel) {
            setProcessingRequest(true);
            const updatedFacility = await updateFacility(createEditFacilityModalConfig.facilityModel.id, selectedName, selectedType, selectedCity, selectedState, selectedPhone, selectedZipCode, selectedAddress, selectedFile);
            if (typeof updatedFacility == 'string') {
                setErrorMessage(updatedFacility);
            } else {
                createEditFacilityModalConfig.createdUpdatedFacility(updatedFacility);
                createEditFacilityModalConfig.toggleModal(false);
            }
            setProcessingRequest(false);
        }

    }

    function updateFacilityImage(file: File) {
        setSelectedFile(file);

    }
}
