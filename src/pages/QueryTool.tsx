import SQLeditor from "@/components/SQLeditor";

const QueryTool = () => {
  return (
    <main className="w-screen h-screen  ">
      <div className="w-full h-[5vh] "></div>
      <div className="w-full h-[95vh] flex ">
        <div className="w-1/3 h-full "></div>
        <div className="w-2/3 h-full  ">
          <div className="w-full h-[10%]"></div>
          <div className="w-full h-[90%] ">
            <SQLeditor />
          </div>
        </div>
      </div>
    </main>
  );
};

export default QueryTool;
