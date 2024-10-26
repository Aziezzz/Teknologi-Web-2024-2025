const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const bgColorSelect = document.getElementById('bgColorSelect');
const increaseFontBtn = document.getElementById('increaseFontBtn');
const decreaseFontBtn = document.getElementById('decreaseFontBtn');
const toggleDarkModeBtn = document.getElementById('toggleDarkModeBtn');
const changeFontStyleBtn = document.getElementById('changeFontStyleBtn');
const taskList = document.getElementById('taskList');
const body = document.body;

let fontSize = 16;
let isDarkMode = false;
let fontStyle = 'Arial, sans-serif';

// Fungsi untuk menambah tugas ke daftar
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value;

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    listItem.addEventListener('dblclick', () => editTask(listItem));

    taskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
});

// Fungsi untuk mengedit tugas
function editTask(listItem) {
  const currentText = listItem.firstChild.textContent;
  const newText = prompt('Edit your task:', currentText);

  if (newText !== null && newText.trim() !== '') {
    listItem.firstChild.textContent = newText;
  } else if (newText === '') {
    alert('Task cannot be empty.');
  }
}

// Fungsi untuk mengubah warna latar belakang
bgColorSelect.addEventListener('change', () => {
  body.style.backgroundColor = bgColorSelect.value;
});

// Fungsi untuk memperbesar ukuran font
increaseFontBtn.addEventListener('click', () => {
  fontSize += 2;
  document.documentElement.style.fontSize = `${fontSize}px`;
});

// Fungsi untuk memperkecil ukuran font
decreaseFontBtn.addEventListener('click', () => {
  if (fontSize > 12) {
    fontSize -= 2;
    document.documentElement.style.fontSize = `${fontSize}px`;
  }
});

// Fungsi untuk mengaktifkan mode gelap
toggleDarkModeBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle('dark-mode', isDarkMode);
});

// Fungsi untuk mengubah gaya font
changeFontStyleBtn.addEventListener('click', () => {
  if (taskList.style.fontFamily === 'Arial') {
    taskList.style.fontFamily = 'sans-serif';
  } else {
    taskList.style.fontFamily = 'Arial';
  }
});
