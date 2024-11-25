const listContainer = document.querySelector('.list-container')

const unorganizedList = document.createElement('ul')

for (let i = 0; i < 5; i++) {
    const li = document.createElement('li')
    const liContent = document.createTextNode(`texto ${i}`)

    li.appendChild(liContent)

    unorganizedList.appendChild(li)
}

listContainer.append(unorganizedList)
