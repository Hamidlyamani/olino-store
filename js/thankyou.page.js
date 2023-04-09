function clickr() {
    var name = document.getElementById('nome').value;
    var ntele = document.getElementById('ntele').value;
    var ville = document.getElementById('ville').value;
    var email = document.getElementById('email').value;
    var nomproduit = document.getElementById('nomproduit').innerHTML;
    var quantite = document.getElementById('quantite').value;
    var adresse = document.getElementById('adresse').value;
    var taille = document.querySelector('input[name="taile"]:checked').value;
    localStorage.setItem('ntele', ntele);
    localStorage.setItem('ville', ville);
    localStorage.setItem('adresse', adresse);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('nomproduit', nomproduit);
    localStorage.setItem('quantite', quantite);
    localStorage.setItem('taille', taille);


}

function getName() {
    var nam1 = localStorage.getItem('name');
    var ntele = localStorage.getItem('ntele');
    var ville = localStorage.getItem('ville');
    var email = localStorage.getItem('email');
    var adresse = localStorage.getItem('adresse');

}

function changeImage(a) {
    document.getElementById("img").src = a.src;
}
// function getName() {
//     var name = localStorage.getItem('name');
//     document.getElementById("demo").innerHTML = name;
// }
// let html = document.getElementById("nom").innerHTML;
// document.getElementById("demo").innerHTML = html;