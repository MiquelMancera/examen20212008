function passaSeguentMMB(objRebut){
    let idObjPregAct = objRebut.parentElement.parentElement.id; 
    let colArticles = document.getElementsByTagName("article");
    let idObjPregSeg;
      for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregSeg = colArticles[i+1].id;
        break;
      };
    }
  
    amagaElementMMB(idObjPregAct);
    mostraElementMMB(idObjPregSeg);
  }
  
  
  function mostraElementMMB(idRebut){
    document.getElementById(idRebut).classList.add("elementVisibleMMB");
    document.getElementById(idRebut).classList.remove("elementOcultMMB");
  }
  
  function amagaElementMMB(idRebut){
    document.getElementById(idRebut).classList.remove("elementVisibleMMB");
    document.getElementById(idRebut).classList.add("elementOcultMMB");
  }