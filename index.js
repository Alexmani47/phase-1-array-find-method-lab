function superbowlWin(record) {
    const win = record.find(season => season.result === "W");
    return win ? win.year : undefined;
  }
  console.log(superbowlWin(record));
