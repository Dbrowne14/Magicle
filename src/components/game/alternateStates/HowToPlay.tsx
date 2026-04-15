export const HowToPlay = () => {
  const explainGame = {
    match: "Perfect match",
    partial: "Partial match",
    noMatch: "No match",
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
        <h2 className="text-center">How To Play</h2>
        <div
          className={`grid grid-cols-3 grid-rows-2 gap-2 w-full h-full auto-rows-fr justify-center items-center text-center text-black rounded-2xl px-6`}
        >
          {Object.entries(explainGame).map(([key, result]) => {
            console.log(result)
            return <div className={`h-12 bold w-ful text-[0.8rem] p-2 rounded-2xl ${key === "match" ? "bg-highlightGreen" : key === "partial" ? "bg-highlightYellow" : "bg-highlightGrey"}`}>{result}</div>;
          })}
        </div>
    </div>
  );
};
