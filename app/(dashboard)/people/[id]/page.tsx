import { NattiButton, NattiButtonLink } from "@/components/common/NattiButton";
import NattiScaffold from "@/components/common/NattiScaffold";
import { Save } from "lucide-react";

const PeopleEdit = () => {
  return (
    <NattiScaffold
      title="person"
      actions={<NattiButton label="save" icon={<Save />} />}
    >
      <div>coming soon...</div>
    </NattiScaffold>
  );
};

export default PeopleEdit;
