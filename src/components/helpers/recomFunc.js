export default function recomFunc(values) {
  var counts = {};
  values
    .flat()
    .forEach((movie) => {
      if (!counts[movie.id]) 
        counts[movie.id] = {
          times: 0
        };
      counts[movie.id].times = counts[movie.id].times + 1;
      counts[movie.id].movie = movie;
    });

  return Object
    .values(counts)
    .sort((a, b) => b.times - a.times);
}
