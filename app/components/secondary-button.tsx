import Button from '@mui/material/Button';
/**
 * Component to create secondary button
 * @param buttonText Text displayed on button
 * @param onClick On click handler function
 * @returns
 */
type SecondaryButtonConfig = {
    buttonText: string;
    onClick: () => void;
  };
  export function SecondaryButton(secondaryButtonConfig: SecondaryButtonConfig) {
    return (
      <>
        <Button  className="!bg-white text-xl !text-button-background" onClick={() => secondaryButtonConfig.onClick()} variant="contained"> {secondaryButtonConfig.buttonText}</Button>
      </>
    );
  }
  