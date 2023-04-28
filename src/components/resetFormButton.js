import { useFormikContext } from "formik";
import { Button } from "reactstrap";

function ResetFormButton() {
  const { resetForm } = useFormikContext();

  function handleReset() {
    resetForm();
  }

  return (
    <Button type="button" color="primary" onClick={handleReset}>
        Send Message
    </Button>
  );
}

export default ResetFormButton;
