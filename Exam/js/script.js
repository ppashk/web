function calculate() {
    var len = document.getElementById("len").value;
    var num = document.getElementById("num").value;

    if (isNaN(len) || isNaN(num) || num < 3 || num > 99) {
        alert("Input not valid");
    } else {
        document.getElementById("output").innerHTML =
            '<tr>' +
            '<td>' + 1 + '</td>' +
            '<td>' + num + '</td>' +
            '</tr>';
        for (i = 1; i < len; i++) {
            if (num % 2 === 0) {
                num /= 2;
            } else {
                num *= 3;
                num++;
            }
            document.getElementById("output").innerHTML +=
                '<tr>' +
                '<td>' + (i + 1) + '</td>' +
                '<td>' + num + '</td>' +
                '</tr>';
            if (num === 1) {
                alert("Length of sequence was reduced to " + i + " because of overvalue.\nPress OK.");
                break;
            }
        }
    }
}

