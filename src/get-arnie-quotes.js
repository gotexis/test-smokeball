const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {

  try {
    const results = await Promise.all(urls.map(
      url => httpGet(url)
    ))

    return results.map(
      ({status, body}) => {
        const {message} = JSON.parse(body)
        return ({[status === 200 ? 'Arnie Quote' : 'FAILURE']: message});
      }
    );
  } catch (e) {
    console.error(e);
  }

};

module.exports = {
  getArnieQuotes,
};
