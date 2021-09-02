var ulang = true;

while (ulang) {
	alert('Anda akan bermain suwit melawan bot');
	var player = prompt('Masukkan pilihan anda : gunting, batu, kertas\nNote : gunakan huruf kecil');

	var bot = Math.random();
	if (bot < 0.33) {
		bot = 'gunting';
	} else if (bot >= 0.33 && bot < 0.66) {
		bot = 'batu';
	} else {
		bot = 'kertas';
	}

	var hasil = '';

	if (player === bot) {
		hasil = 'SERI!';
	} else if (player === 'gunting') {
		if (bot === 'batu') {
			hasil = 'Anda KALAH!';
		} else if (bot === 'kertas') {
			hasil = 'Anda MENANG!';
		}
	} else if (player === 'batu') {
		if (bot === 'gunting') {
			hasil = 'Anda MENANG!';
		} else if (bot === 'kertas') {
			hasil = 'Anda KALAH!';
		}
	} else if (player === 'kertas') {
		if (bot === 'gunting') {
			hasil = 'Anda KALAH!';
		} else if (bot === 'batu') {
			hasil = 'Anda MENANG!';
		}
	} else {
		ulang = confirm('Maaf, pilihan yang anda masukkan salah.\nSilahkan coba lagi!');
		continue;
	}

	alert('Anda memilih '+ player + ' dan Bot memilih ' + bot + '\nMaka hasilnya adalah ' + hasil);
	ulang = confirm('Apakah anda ingin bermain lagi?');
}

