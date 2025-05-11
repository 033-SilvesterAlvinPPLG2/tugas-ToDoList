let tambah = document.getElementById("tambahkan")
let hapus = document.getElementById("hapus")

tambah.addEventListener("click", function(){
    let value = document.getElementById("masuk").value.trim()
        let list = document.createElement("li")
        list.innerText = value
        list.id = "bebas"
        document.getElementById("hasil").appendChild(list)
    
})

hapus.addEventListener("click", function() {
    let container = document.getElementById("hasil")
    let hapus = document.getElementById("bebas")
    if (hapus) {
        container.removeChild(hapus);
    } else {
        alert("paragraf sudah di hapus")
    }
})