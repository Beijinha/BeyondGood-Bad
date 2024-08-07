const URL = "";

async function fetchData() {

  const response = await fetch(`${URL}`);

  return response.json();
};

async function getFilms() {

  try {

    const repos = await Promise.all([
      fetchData()
    ]);

    console.log(repos[0].results);

    return repos[0].results;

  } catch (err) {

    alert(err.message);
  }
}

export default { getFilms };