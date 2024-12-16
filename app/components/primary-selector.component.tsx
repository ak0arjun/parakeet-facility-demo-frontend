import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type PrimarySelectorConfig = {
    defaultValue: string;
    label: string;
    options: { [key: string]: string };
    onSelectionChange: (selection: string) => void;
}

export default function PrimarySelector(primarySelectorConfig: PrimarySelectorConfig) {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{primarySelectorConfig.label}</InputLabel>
                <Select
                    className="w-full"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={primarySelectorConfig.defaultValue}
                    label={primarySelectorConfig.label}
                    onChange={(e) => primarySelectorConfig.onSelectionChange(e.target.value)}
                >
                    {Object.keys(primarySelectorConfig.options).map((key: string) => {
                        return <MenuItem key={key} value={key}>{primarySelectorConfig.options[key]}</MenuItem>;
                    })};

                </Select>
            </FormControl>
        </>
    )
}