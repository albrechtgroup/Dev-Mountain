function guessGifts(wishlist, presents) {
    return wishlist.filter(function(x){
      return presents.some(function(y){
        return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
      });
    }).map(function(x){ return x.name; });
  }
  
  
  function guessGifts(wishlist, presents) {
    return wishlist.filter(function(wish) {
      return presents.some(function(present) {
        return Object.keys(present).every(function(key) {
          return wish[key] === present[key];
        });
      });
    }).map(function(wish) {
      return wish.name;
    });
  }
  
  function guessGifts(wishlist, presents) {
    var r = [];
    presents.forEach(function(p){
      wishlist.forEach(function(w){
        if (p.size == w.size && p.clatters == w.clatters && p.weight == w.weight && r.indexOf(w.name) == -1) r.push(w.name);
      });
    });
    return r;
  }
  