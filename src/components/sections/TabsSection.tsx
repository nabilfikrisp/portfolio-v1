import { WORKS, type WorkType } from "@/consts/work-experiance.ts";
import { TabList, TabPanel, Tabs, TabTrigger } from "../Tabs";

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
        <CardList />
      </TabPanel>
      <TabPanel value="education">
        <CardList />
      </TabPanel>
    </Tabs>
  );
}

function CardList() {
  return (
    <div className="mt-4 flex flex-col gap-5 rounded border border-my-accent-one p-5">
      {WORKS.map((work, index) => (
        <Card key={index} work={work} />
      ))}
    </div>
  );
}

function Card({ work }: { work: WorkType }) {
  return (
    <div className="flex gap-5">
      <div className="aspect-square h-full w-20 overflow-hidden rounded border">
        {work.imageUrl}
      </div>
      <div className="gap flex flex-1 flex-col">
        <h2 className="text-xl font-semibold text-my-accent-one">
          {work.title}
        </h2>
        <div className="flex gap-2 text-my-paragraph/70">
          <span>{work.company}</span>
          <span>|</span>
          <span>{work.employmentType}</span>
          <span>|</span>
          <span>{work.date}</span>
        </div>
        <p>{work.description}</p>
        {work.descriptionList && (
          <ul>
            {work.descriptionList.map((text) => (
              <li key={text}>- {text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
