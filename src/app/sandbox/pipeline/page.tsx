import { redirect } from "next/navigation";

export default function PipelinePage() {
  redirect("/sandbox/shortlist?view=kanban");
}
