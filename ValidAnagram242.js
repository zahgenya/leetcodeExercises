var isAnagram = function(s, t) {
    const charsS = s.split('');
    charsS.sort();

    const charsT = t.split('');
    charsT.sort();

    if (JSON.stringify(charsS) === JSON.stringify(charsT)) {
      return true;
    } else {
      return false;
    }
};