import { daily } from '@/data/data.json';

const Daily: React.FC = () => {
  const { title, subtitle, month, day } = daily;
  return (
    <section className="flex flex-col items-center py-20">
      <div className="h-[992px] w-[699px] border border-royal-blue-500 px-8 py-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold italic text-royal-blue-600">
            {title}
            <span className="block">{subtitle}</span>
          </h1>

          <div className="flex w-[200px] rounded-2xl border border-royal-blue-300 ">
            <p className="w-16 border-r border-r-royal-blue-300"></p>
            <div className="flex items-center text-xl font-medium text-royal-blue-800">
              <p className="pl-11">{month}</p>
              <p className="pl-11">{day}</p>
            </div>
          </div>
        </div>
        <p className="my-5 h-12 rounded-2xl border border-royal-blue-300"></p>
        <div className="flex h-[400px] gap-5">
          <div className="w-1/2">
            <h2 className="mb-3 text-center text-lg uppercase text-royal-blue-800">
              To Do
            </h2>
            <div className="h-[360px] w-full rounded-2xl border border-royal-blue-300"></div>
          </div>
          <div className="w-1/2">
            <h2 className="mb-3 text-center text-lg uppercase text-royal-blue-800">
              Schedule
            </h2>
            <div className="h-[360px] w-full rounded-2xl border border-royal-blue-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Daily;
