function enough(cap, on, wait) {
    let assentosLivres = cap - on;
    if (wait <= assentosLivres) {
      return 0;
    } else {
      return (wait - assentosLivres);
    }
  }
  
  console.log(enough(100,30,80));
  console.log(enough(100,20,20));