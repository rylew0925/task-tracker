// First update by Richard
const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

btn.addEventListener('click', () => {
  if (input.value.trim() === "") return;
  const li = document.createElement('li');
  li.textContent = input.value;
  list.appendChild(li);
  input.value = "";
});