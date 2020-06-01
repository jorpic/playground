import createStore from 'unistore'

const store = createStore({
  task: null,
  section: null,
  code: "log({time});",
  stdout: [],
  gridProps: {
    size: 12,
    speed: 1,
  }
});

const LOCATION_RX = new RegExp("#([^/]*)(/(.*))?");

const actions = {
  setCode(st, code) { return {code}; }

  setStdout(st, stdout) { return {stdout}; }

  handleHashChange(st) {
    // TODO: load from idb if hash is empty
    const match = window.location.hash.match(LOCATION_RX);
    const task = match ? match[1] : "example";
    const section = match && match[3] ? match[3] : "code";
    return {task, section};
  }
};

export {store, actions};
