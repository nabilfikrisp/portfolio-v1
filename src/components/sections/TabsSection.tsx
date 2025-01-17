import { TabList, TabPanel, Tabs, TabTrigger } from "../Tabs";

export default function TabsSection() {
  return (
    <Tabs defaultValue="work">
      <TabList>
        <TabTrigger value="work">Work</TabTrigger>
        <TabTrigger value="education">Education</TabTrigger>
      </TabList>
      <TabPanel value="work">This is work</TabPanel>
      <TabPanel value="education">This is education</TabPanel>
    </Tabs>
  );
}
