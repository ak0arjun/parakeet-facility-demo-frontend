import { Box, Modal, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { SecondaryButton } from "../components/secondary-button";
import { PrimaryButton } from "../components/primary-button";

type MessageModalConfig = {
    title: string;
    description: string;
    open: boolean;
    toggleModal: Dispatch<SetStateAction<boolean>>;
    confirmClick: (() => void) | undefined;
}

const styleTop = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


const styleCenter = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function MessageModal(messageModalConfig: MessageModalConfig) {
    return (
        <>
            <Modal
                open={messageModalConfig.open}
                onClose={() => { messageModalConfig.toggleModal(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={messageModalConfig.confirmClick == undefined ? styleTop : styleCenter}>
                    <div>
                        <Typography id="modal-modal-title" variant="h5" component="h2" className="text-black">
                            {messageModalConfig.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className="text-slate-500">
                            {messageModalConfig.description}
                        </Typography>
                        <div className="p-3"></div>

                    </div>
                    {
                        messageModalConfig.confirmClick != undefined && <div className="fixed bottom-0 left-0 w-full h-16 text-right px-4 flex flex-row py-2">

                            <div className="flex-1"></div>
                            <SecondaryButton buttonText="CANCEL" onClick={() => messageModalConfig.toggleModal(false)}></SecondaryButton>
                            <div className="p-3"> </div>

                            <PrimaryButton buttonText={"CONFIRM"} onClick={() => {
                                if (messageModalConfig.confirmClick) {
                                    messageModalConfig.confirmClick();
                                }
                                messageModalConfig.toggleModal(false);
                            }}></PrimaryButton>
                        </div>
                    }


                </Box>
            </Modal>
        </>
    )
}