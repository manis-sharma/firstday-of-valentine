onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    // show the envelope after the flower animations finish
    const d = setTimeout(() => {
      document.body.classList.add('show-envelope');
      clearTimeout(d);
    }, 6000);
  };