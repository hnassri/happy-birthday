document.getElementById("begin").onclick = () => {
    const firstName = prompt("Entrez votre prénom pour commencer la séance: ");
    if( firstName.toLowerCase().trim() === "dora" ){
        printDivination("dora")
    }else {
        printDivination("autre");
    }
}

async function printDivination(name = "autre"){
    const divination = Array.from(document.getElementById(name).children);
    const iSee = document.getElementById("iSee");
    iSee.classList.toggle("d-none");
    await new Promise(done => setTimeout(() => done(), 2000));
    iSee.classList.toggle("d-none");
    for(let i = 0; i < divination.length; i++){
        divination[i].classList.toggle("d-none")
        await new Promise(done => setTimeout(() => done(), 2000));
        divination[i].classList.toggle("d-none")
    }
}