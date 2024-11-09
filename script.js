let display = document.getElementById('display');

// Fungsi untuk menambah angka atau operator ke layar
function appendValue(value) {
  display.value += value;
}

// Fungsi untuk menghapus input di layar
function clearDisplay() {
  display.value = '';
}

// Fungsi untuk menghitung hasil
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
