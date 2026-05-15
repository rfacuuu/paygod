import { PagePlaceholder } from "./PagePlaceholder";
import { MOCK_INSTITUTION } from "@/lib/mockAuth";

export default function Overview() {
  return <PagePlaceholder title="Overview" subtitle={`Welcome back, ${MOCK_INSTITUTION.name}`} />;
}
