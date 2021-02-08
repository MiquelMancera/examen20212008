function passaAnteriorMMB(objRebut){
    let idObjPregAct = objRebut.parentElement.parentElement.id; 
    let colArticles = document.getElementsByTagName("article");
    let idObjPregAnt;
      for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregAnt = colArticles[i-1].id;
        break;
      };
    }   
    amagaElementMMB(idObjPregAct);
    mostraElementMMB(idObjPregAnt);
  }
  function mostraElementMMB(idRebut){
    document.getElementById(idRebut).classList.add("elementVisibleMMB");
    document.getElementById(idRebut).classList.remove("elementOcultMMB");
  }

  function amagaElementAH(idRebut){
    document.getElementById(idRebut).classList.remove("elementVisibleMMB");
    document.getElementById(idRebut).classList.add("elementOcultMMB");
  }