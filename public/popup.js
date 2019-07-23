const form = document.getElementById('form')
form.addEventListener('submit', evt => {
  evt.preventDefault()
  const title = document.getElementById('title')
  const date = document.getElementById('date')
  chrome.storage.sync.set({
    title: title.value,
    date: date.valueAsNumber,
  })
  alert('Cài đặt thành công')
})
