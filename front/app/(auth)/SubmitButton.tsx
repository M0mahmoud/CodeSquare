import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ state }: { state: any }) => {
  const { toast } = useToast();
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      aria-disabled={pending}
      onClick={() => {
        toast({
          duration: 4000,
          variant: state.msg === "Worng" ? "destructive" : "default",
          title: state.msg,
        });
      }}
    >
      {pending ? "Loading..." : "Submit"}
    </Button>
  );
};
export default SubmitButton;
