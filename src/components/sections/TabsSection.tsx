import { TabList, TabPanel, Tabs, TabTrigger } from "../Tabs";
import { EducationHistoryCards } from "./tabs/EducationHistoryCards";
import { WorkExperienceCards } from "./tabs/WorkExperienceCards";

export default function TabsSection() {
  return (
    <Tabs defaultValue="work">
      <TabList className="flex gap-2 rounded bg-my-accent-one p-1">
        <TabTrigger
          value="work"
          // className="group-data-[tab-key=work]:text-white" example
          className="rounded-sm text-center text-white"
        >
          Work
        </TabTrigger>
        <TabTrigger
          value="education"
          className="rounded-sm text-center text-white"
        >
          Education
        </TabTrigger>
      </TabList>
      <TabPanel value="work">
        <WorkExperienceCards />
      </TabPanel>
      <TabPanel value="education">
        <EducationHistoryCards />
      </TabPanel>
    </Tabs>
  );
}
