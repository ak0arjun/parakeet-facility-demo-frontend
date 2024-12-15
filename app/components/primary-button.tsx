import Button from '@mui/material/Button';
/**
 * Component to create primary button
 * @param buttonText Text displayed on button
 * @param onClick On click handler function
 * @returns
 */
type PrimaryButtonConfig = {
    buttonText: string;
    onClick: () => void;
  };
  export function PrimaryButton(primaryButtonConfig: PrimaryButtonConfig) {
    return (
      <>
        <Button  className="!bg-button-background text-xl" onClick={() => primaryButtonConfig.onClick()} variant="contained"> {primaryButtonConfig.buttonText}</Button>
      </>
    );
  }
  