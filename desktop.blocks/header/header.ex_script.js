var gibberish=["Это просто какой-то наполнитель текста", "Добро пожаловать в библиотеку", "Контент демонстрации и читать здесь ничего "]
function filltext(words){
for (var i=0; i<words; i++)
document.write(gibberish[Math.floor(Math.random()*3)]+" ")
}