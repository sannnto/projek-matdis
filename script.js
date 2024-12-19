document.getElementById("encryptButton").addEventListener("click", function() 
{const inputText = document.getElementById("inputText").value;
const key = 15;
const encryptedText = caesarCipher(inputText, key);
document.getElementById("outputText").value = encryptedText;
});

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            let shiftedCode = code + shift;

            if (char >= 'a' && char <= 'z') {
                if (shiftedCode > 122) {
                    shiftedCode -= 26;
                }
            } else if (char >= 'A' && char <= 'Z') {
                if (shiftedCode > 90) {
                    shiftedCode -= 26;
                }
            }

            return String.fromCharCode(shiftedCode);
        }
        return char; // Jika bukan huruf, kembalikan karakter aslinya
    }).join('');
}

document.getElementById("decryptButton").addEventListener("click", function()
{const inputText = document.getElementById("inputText").value;
    const key = 11;
    const encryptedText = caesarCipher(inputText, key);
    document.getElementById("outputText").value = encryptedText;
    });
    
    function caesarCipher(str, shift) {
        return str.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt();
                let shiftedCode = code + shift;
    
                if (char >= 'a' && char <= 'z') {
                    if (shiftedCode > 122) {
                        shiftedCode -= 26;
                    }
                } else if (char >= 'A' && char <= 'Z') {
                    if (shiftedCode > 90) {
                        shiftedCode -= 26;
                    }
                }
    
                return String.fromCharCode(shiftedCode);
            }
            return char; // Jika bukan huruf, kembalikan karakter aslinya
        }).join('');
    }
