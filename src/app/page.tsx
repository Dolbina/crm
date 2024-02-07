
import StatusLabel, {Status} from "@/app/components/status-label";
import AddCompanyButton from "@/app/components/add-company-button";


export default function Home() {
 
  return (
    <main>
      <h1 className="text-xl">Home page{new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active} disabled>
        Active
      </StatusLabel>
      <StatusLabel status={Status.NotActive} disabled>
        Not Active
      </StatusLabel>
      <StatusLabel status={Status.Pending} disabled>
        Pending
      </StatusLabel>
      <StatusLabel status={Status.Suspended} disabled>
        Suspended
      </StatusLabel>
      <AddCompanyButton />
    </main>
  );
}
