function Task13() {
  const array = ["cat", "dog", "lion", "tiger"];
  const elements = [];
  for (let i = 0; i < array.length; i++) {
    elements.push(
      <button key={i}>{array[i]}</button>
    );
  }
  return (
    <>
      {elements}
    </>
  );
}

export default Task13;
