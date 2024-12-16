import { TextField } from "@mui/material";

type PrimaryInputConfig = {
    label: string;
    defaultValue: string;
    isRequired: boolean;
    onTextChange: (text: string) => void;
}
export default function PrimaryInput(primaryInputConfig: PrimaryInputConfig) {
    return (
        <>
            <TextField className="w-full"
                required = {primaryInputConfig.isRequired}
                id="outlined-required"
                label={primaryInputConfig.label}
                defaultValue={primaryInputConfig.defaultValue}
                onChange={(e) => primaryInputConfig.onTextChange(e.target.value)}
            />
        </>
    )
}