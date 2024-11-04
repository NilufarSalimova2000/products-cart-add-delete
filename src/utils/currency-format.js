const formatter = (price) =>
    new Intl.NumberFormat("ru", {
      style: "decimal",
    }).format(price || 0);
  
  export default formatter;