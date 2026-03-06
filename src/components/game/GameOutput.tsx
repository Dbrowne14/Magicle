
const GameOutput = () => {
   const n = new Array(8)
  return (
    <div className="flex flex-1 flex-col h-full">
        <div className="h-40 border-b border-white"></div>
        <div className="flex-1 flex-wrap">
            {n.map((input, key) => {
                return (
                    <div id={input} key={key} className="border border-white h-10 w-10"> </div>
                )
            })}
        </div>
    </div>
  )
}

export default GameOutput
