import { Timeline } from "@/components/ui/timeline";
import { projects } from "@/components/constant";

const HomePage = () => {
  return (
    <div>
      <Timeline data={projects} />
    </div>
  );
};

export default HomePage;
