type EndState = {
  todaysAnswer: string;
  result: string;
  img: string;
};

const EndState = ({ todaysAnswer, result, img }: EndState) => {
  return (
    <div className="fixed flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[rgba(1,1,1,0.9)] w-80 h-80 rounded-2xl  items-center justify-center gap-4">
      <h2>You {result}</h2>
      <h2>{todaysAnswer}</h2>
      <img src={img} className="w-20" />
    </div>
  );
};

export default EndState;
