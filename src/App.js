//your code is going to go here

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Wesley",
      animal: "Dog",
      breed: "Black Lab"
    }),
    React.createElement(Pet, { name: "Pepper", animal: "Cat", breed: "Bird" }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Bird",
      breed: "Cockatiel"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
