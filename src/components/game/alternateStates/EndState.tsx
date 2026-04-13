type EndState = {
  result: string;
  todaysWord: {
    name: string;
    img: string;
  } | null;
};

const EndState = ({ result, todaysWord }: EndState) => {
  return (
    <div className="fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[rgba(1,1,1,0.9)] w-80 h-80 rounded-2xl  items-center justify-center gap-4">
      <h2>You {result}</h2>

        <img src={todaysWord?.img} className="w-40" />
        <h2>Todays card is {todaysWord?.name}</h2>
    </div>
  );
};

export default EndState;
