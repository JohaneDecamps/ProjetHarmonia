// Some data to make the trick
const tables = require("../../database/tables");

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

const browse = async (req, res) => {

const categoriesFromDB = await tables.category.readAll();
  

res.json(categoriesFromDB);
  };
  
  
// const browse = (req, res) => {
//   if (req.query.q != null) {
//     const filteredCategories = categories.filter((c) =>
//       c.name.includes(req.query.q)
//     );

//     res.json(filteredCategories);
//   } else {
//     res.json(categories);
//   }
// };

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const categorie = categories.find((p) => p.id === parsedId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};

// Export it to import it somewhere else

module.exports = { browse, read };
