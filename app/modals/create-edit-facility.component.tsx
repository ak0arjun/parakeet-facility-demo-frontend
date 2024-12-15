import { Dispatch, SetStateAction, useState } from "react";
import { FacilityModel } from "../models/facility.model";
import { Box, Modal, Typography } from "@mui/material";
import { PrimaryButton } from "../components/primary-button";
import { SecondaryButton } from "../components/secondary-button";

type CreateEditFacilityModalConfig = {
    description: string;
    id: string;
    title: string;
    isCreate: boolean;
    open: boolean;
    toggleModal: Dispatch<SetStateAction<boolean>>;
    facilityModel: FacilityModel | undefined;
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
                        <Typography id="modal-modal-title" variant="h6" component="h2" className="text-black">
                            {createEditFacilityModalConfig.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className="text-black">
                            {createEditFacilityModalConfig.description}
                        </Typography>

                        <div className="h-16"></div>

                        <div className="fixed bottom-0 left-0 w-full h-16 text-right px-4 flex flex-row py-2">
                            <div className="flex-1"></div>
                            <SecondaryButton buttonText="CANCEL" onClick={() => createEditFacilityModalConfig.toggleModal(false)}></SecondaryButton>
                            <div className="p-3"> </div>
                            <PrimaryButton buttonText={createEditFacilityModalConfig.isCreate? 'ADD': 'UPDATE'} onClick={() => handleModalSubmit()}></PrimaryButton>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );

    function handleModalSubmit() {

    }
}
