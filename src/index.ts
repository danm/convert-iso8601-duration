export default function (timeDurationString: string): number {
  const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  let hours = 0;
  let minutes = 0; 
  let seconds = 0;
  let totalseconds = 0;

  if (reptms.test(timeDurationString)) {
    const matches = reptms.exec(timeDurationString);
    // console.log(matches)
    hours = Number(matches[1]) || 0;
    minutes = Number(matches[2]) || 0;
    seconds = Number(matches[3]) || 0;
    totalseconds = (((hours * 3600) + minutes) * 60) + seconds;
    return totalseconds;
  }

  return 0;
};