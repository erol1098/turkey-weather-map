export const handleHoverCityName = (e) => {
  const target = e.target.previousSibling;
  target.classList.remove('fill-slate-50');
  target.classList.remove('dark:fill-slate-400');
  target.classList.add('fill-red-500');
};

export const handleLeaveCityName = (e) => {
  const target = e.target.previousSibling;
  target.classList.remove('fill-red-500');
  target.classList.add('fill-slate-50');
  target.classList.add('dark:fill-slate-400');
};
