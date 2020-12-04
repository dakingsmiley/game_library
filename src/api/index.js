const DEFAULT_NAME = 'db';

const get = (name) => (
  JSON.parse(localStorage.getItem(name)) || []
);

const show = (name, id) => {
  const data = get(name);

  return data[id];
};

const create = (name, game) => {
  const data = get(name);
  data.push(game);
  localStorage.setItem(name, JSON.stringify(data));
};

const update = (name, game, id) => {
  const data = get(name);
  const updatedData = updateByID(data, game, id);
  localStorage.setItem(name, JSON.stringify(updatedData));
};

const updateByID = (data, newGame, id) => {
  return data.map((game, index) => {
    if (index === parseInt(id)) {
      return newGame;
    }
    return game;
  });
};

const destroy = (name, id) => {
    const data = get(name);
    const updatedData = destroyByID(data, id);
   localStorage.setItem(name, JSON.stringify(updatedData));
};

const destroyByID = (data, id) => {
  return data.filter( (game, index) => (
    index !== id ? true : false
  )).map((game) => game);
};

export {
  DEFAULT_NAME,
  get,
  show,
  create,
  update,
  destroy
}
