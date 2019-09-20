import timezones from './timezones.js';

const timezoneItems = timezones();

// Get timezones, loop and render to main element
const render = () => {
  let result = '';
  timezoneItems.forEach(tz => {
    const now = new Date();

    // Get the formatted date in this timezone and split into parts
    const localDateSplit = now
      .toLocaleString('en-GB', {timeZone: tz.timezone})
      .split(',');
    const dateString = localDateSplit[0];
    const timeString = localDateSplit[1].trim();

    // Generate an item for the grid
    result += `
      <li class="sf-flow">
        <h2 class="text-600">${tz.name}</h2>
        ${tz.isCurrent ? `<p class="weight-bold">ℹ️ This is your timezone</p>` : ``}
        <dl>
          <dt class="weight-bold">Date:</dt>
          <dd>${dateString}</dd>
          <dt class="weight-bold">Time:</dt>
          <dd><span class="count">${timeString}</span></dd>
        </dl>
      </li>
    `;
  });

  document.querySelector('main').innerHTML = `<ul class="timezones">${result}</ul>`;
};

// Render items, then re-render after each second (wild, I know)
const init = () => {
  render();

  setInterval(render, 1000);
};

init();

export default init;
