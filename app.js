function alpha(item) {
	var input = document.getElementById("texte");
	input.value += item;
}

var char;

	function change() {
	char = document.getElementById("texte").value;

	char = char.replace(/a=/g, "ɑ");
	char = char.replace(/ɑ=/g, "ɒ");
	char = char.replace(/ɒ=/g, "æ");
	char = char.replace(/æ=/g, "a");
	char = char.replace(/e=/g, "ə");
	char = char.replace(/ɛ=/g, "ɛ");
	char = char.replace(/ɛ=/g, "e");
	char = char.replace(/o=/g, "ɔ");
	char = char.replace(/ɔ=/g, "o");
	char = char.replace(/u=/g, "ʊ");
	char = char.replace(/ʊ=/g, "ʌ");
	char = char.replace(/ʌ=/g, "u");
	char = char.replace(/d=/g, "ð");

	char = char.replace(/ʤ=/g, "d"); 
	char = char.replace(/t=/g, "θ"); 
	char = char.replace(/θ=/g, "ʧ"); 
	char = char.replace(/ʧ=/g, "t");
	char = char.replace(/s=/g, "ʃ");
	char = char.replace(/ʃ=/g, "s");
	char = char.replace(/l=/g, "ɫ");
	char = char.replace(/ɫ=/g, "l");
	char = char.replace(/n=/g, "ŋ");
	char = char.replace(/ŋ=/g, "n");
	char = char.replace(/z=/g, "ʒ");
	char = char.replace(/ʒ=/g, "z");

	document.getElementById("texte").value = char;
}