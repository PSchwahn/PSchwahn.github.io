//This somehow doesn't work. configure in _includes/head.html instead.
alert("Inside config file. Trying to load config.");
MathJax = {
  tex: {
    macros: {
      RR: "\\mathbb{R}",
      dd: "\\mathrm{d}",
      Ric: "\\mathrm{Ric}",
      CC: "\\mathbb{C}",
      testmacro: "POGGO but better"
    },
    environments: {
      braced: ["\\left\\{", "\\right\\}"]
    }
  }
};
alert("MathJax config loaded from file.");
