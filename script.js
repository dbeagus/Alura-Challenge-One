function encriptar(){
    var input = document.getElementById("input").value;
    var output = "";
    for (var i=0; i<input.length; i++){
        var char = input.charAt(i);
        switch (char){
            case "a":
                output += "ai";
                break;
            case "e":
                output += "enter";
                break;
            case "i":
                output += "imes";
                break;
            case "o":
                output += "ober";
                break;
            case "u":
                output += "ufat";
                break;
            default:
                output += char;
                break;
        }
    }
    document.getElementById("output").value = output;
}

function desencriptar(){
    var input = document.getElementById("input").value;
    var output = "";
    var i = 0;
    while (i < input.length){
        var char = input.charAt(i)
        if (char == "a" && input.substr(i,2) == "ai"){
            output += "a"
            i += 2;
        } else if (char == "e" && input.substr(i,5) == "enter"){
            output += "e";
            i += 5;
        } else if (char == "i" && input.substr(i,4) == "imes"){
            output += "i";
            i += 4;
        } else if (char == "o" && input.substr(i,4) == "ober"){
            output += "o";
            i += 4;
        } else if (char == "u" && input.substr(i,4) == "ufat"){
            output += "u";
            i += 4;
        } else{
            output += char;
            i++;
        }
    }
    document.getElementById("output").value = output;
}

function copiar(){
    var text = document.getElementById("output");
    text.select();
    text.setSelectionRange(0,9999);
    document.execCommand("copy");
    alert("El texto se ha copiado.");
}