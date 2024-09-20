function categorizeNumber(input) {
  /**
   * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
   * Dengan ketentuan sebagai berikut:
   * 1. Jika input bukan number, bangkitkan (throw) error.
   * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
   * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
   * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
   * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
   * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
   *
   * Kita juga perlu untuk memahami cara mendeteksi apakah suatu bilangan adalah prima atau tidak.
   * Cara yang paling sederhana adalah dengan menggunakan algoritma loop yang akan mengecek setiap bilangan dari 2 hingga input.
   * Jika input tidak dapat dibagi dengan bilangan apapun selain 1 dan dirinya sendiri, maka bilangan tersebut adalah bilangan prima.
   */
  let isPrime = true;

  // Jika input bukan number, bangkitkan error
  if (typeof input !== 'number') {
    throw new Error('Input harus berupa bilangan bulat');
  }

  // Jika input adalah nol, kembalikan dengan nilai "Nol"
  if (input === 0) {
    return 'Nol';
  }

  // Jika input adalah bilangan negatif, kembalikan dengan nilai "Negatif"
  if (input < 0) {
    return 'Negatif';
  }

  // Jika input adalah bilangan prima, kembalikan dengan nilai "Prima"
  if (input > 1) {
    for (let i = 2; i < input; i++) {
      // Jika input dapat dibagi dengan bilangan apapun selain 1 dan dirinya sendiri,
      // maka bilangan tersebut bukanlah bilangan prima
      if (input % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) return 'Prima';
  }

  // Jika input adalah bilangan genap, kembalikan dengan nilai "Genap"
  if (input % 2 === 0) {
    return 'Genap';
  }

  // Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil"
  if (input % 2 === 1) {
    return 'Ganjil';
  }
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber('abc');
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
