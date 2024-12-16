import { Box, Modal, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type MessageModalConfig = {
    title: string;
    description: string;
    open: boolean;
    toggleModal: Dispatch<SetStateAction<boolean>>;
}

const style = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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
                <Box sx={style}>
                    <div>
                        <Typography id="modal-modal-title" variant="h5" component="h2" className="text-black">
                            {messageModalConfig.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className="text-slate-500">
                            {messageModalConfig.description}
                        </Typography>
                        <div className="p-3"></div>

                    </div>

                </Box>
            </Modal>
        </>
    )
}