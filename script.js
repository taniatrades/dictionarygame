const getWord = async (word) => await (await fetch("https://dictionary-data.lilykhan.repl.co/word/"+word.toLowerCase(), { mode: "cors" })).text();

var button = document.getElementById("search");
var inputBox = document.getElementById("input");
var outputBox = document.getElementById("result");
var loadingBox = document.getElementById("loading")


button.onclick = async () => {
    result.innerHTML = "";
	loadingBox.style.display = "block";
    outputBox.innerHTML = await getWord(inputBox.value);
	loadingBox.style.display = "none";
};

inputBox.onchange = async () => {
    result.innerHTML = "";
	loadingBox.style.display = "block";
    outputBox.innerHTML = await getWord(inputBox.value);
	loadingBox.style.display = "none";
};
