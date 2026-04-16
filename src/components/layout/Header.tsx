const Header = () => {
  const roundNumber = () => {
    const startDate = new Date("2026-04-16");
    const now = new Date();
    const diffMs = now.getTime() - startDate.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1; //base to 1 as first game is game 1
  };

  return (
    <nav className="h-15 bg-black flex items-center justify-center">
      <h3 className="text-[0.9rem] italic text-highlightGrey">
        turn #{roundNumber()}
      </h3>
    </nav>
  );
};

export default Header;
