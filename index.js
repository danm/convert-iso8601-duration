module.exports = (timeDurationString) => {
    const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    let hours = 0;
    let minutes = 0; 
    let seconds = 0;
    let totalseconds = 0;
  
    if (reptms.test(timeDurationString)) {
      const matches = reptms.exec(timeDurationString);
      if (matches[1]) hours = Number(matches[1]);
      if (matches[2]) minutes = Number(matches[2]);
      if (matches[3]) seconds = Number(matches[3]);
      totalseconds = (((hours * 3600) + minutes) * 60) + seconds;
    } else {
      return 0;
    }
    return totalseconds;
  };
  