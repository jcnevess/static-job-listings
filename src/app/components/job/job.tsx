import Image from "next/image";

interface JobProps {
  job: JobInfo;
}

interface JobInfo {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export default function Job({ job }: JobProps) {
  return (
    <div className="bg-grayish-background flex flex-col gap-2 p-6 pt-10 border-l-8 border-l-desaturated-cyan rounded-lg relative shadow-xl">
      <div className="absolute -top-[32px]">
        <Image
          src={`/static/${job.logo}`}
          alt={job.company}
          width={64}
          height={64}
        ></Image>
      </div>
      <div className="flex gap-6">
        <h1 className="text-desaturated-cyan text-lg font-bold">
          {job.company}
        </h1>
        <div className="*:uppercase *:inline-block *:rounded-full *:px-2 flex items-center gap-2 text-white">
          <span className="bg-desaturated-cyan">{job.new && "new!"}</span>
          <span className="bg-dark-grayish-cyan">
            {job.featured && "featured"}
          </span>
        </div>
      </div>
      <h2 className="text-dark-grayish-cyan text-lg font-bold">
        {job.position}
      </h2>
      <div className="text-grayish-cyan flex gap-2">
        <div>{job.postedAt}</div>
        <div>&bull;</div>
        <div>{job.contract}</div>
        <div>&bull;</div>
        <div>{job.location}</div>
      </div>
      <hr className="border-t-grayish-cyan my-3" />
      <div className="flex flex-wrap gap-4 *:text-desaturated-cyan *:font-bold *:px-2 *:py-1 *:bg-grayish-filter *:rounded">
        <div>{job.role}</div>
        <div>{job.level}</div>
        {job.languages.map((lang, i) => (
          <div key={i}>{lang}</div>
        ))}
        {job.tools.map((tool, i) => (
          <div key={i}>{tool}</div>
        ))}
      </div>
    </div>
  );
}
