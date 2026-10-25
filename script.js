function cekNilai() {
     let input = document.getElementById("nilai").value;
    let nilai = Number(input);
    let hasil = document.getElementById("hasil");

    if (input === "" || nilai < 0 || nilai > 100){
        hasil.innerHTML = "Masukkan nilai antara 0 sampai 100!";
        return;

    }
    let grade;
    if (nilai >= 90) {
        grade = "A";
    } else if (nilai >=80) {  
        grade = "B";      
    } else if (nilai >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    let keterangan;
    switch (grade) {
        case "A":
            keterangan = "sangat baik";
            break;
        case "B":
            keterangan = "baik";
            break;
        case "C":
            keterangan = "cukup";
            break;
        default:
            keterangan = "perlu belajar lagi";
        }
        
    hasil.innerHTML = "Nilai kamu: " + grade + " (" + keterangan + ")";
    
}