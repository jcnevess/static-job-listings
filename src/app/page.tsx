import data from "./data.json";
import Job from "./components/job/job";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Image
          src={"/static/images/bg-header-mobile.svg"}
          alt="Job Listings"
          height={30}
        ></Image>
      </div>
      <div className="bg-grayish-filter flex flex-col gap-16 p-6 pt-16 ">
        {data.map((entry, index) => (
          <Job key={index} job={entry}></Job>
        ))}
      </div>
    </>
  );
}
