
let url = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true';
let data = [];
let currentPage = 1;
const getData = async () => {
    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            renderData(currentPage);
        });
    // cardsSection.innerHTML = "";
    // cards.forEach((card) => {
      //   cardsSection.innerHTML += `
      // <div class="card-conainer">
      //    <div class="post-title">
      //       <h2 class="post-title-text">${card.fname}</h2>
      //    </div>
      //    <div class="post-body">
      //       <p class="post-body-text">ll
      //          ${card.address}
      //       </p>
      //    </div>
      // </div>
      // `;
};
getData();
const cardsSection = document.querySelector(".cards-section");
function renderData(page){
    cardsSection.innerHTML = '';
    const startIndex = (page - 1) * 50;
    const endIndex = startIndex + 50;
    for (let i = startIndex; i < endIndex; i++) {
        if (i >= data.length) {
            break;
        }
        let card = document.createElement('div');
        card.className = 'card-container';
        card.innerHTML = `
                    <div class="full-name">
                <p>${data[i].fname}</p>
                <p>${data[i].lname}</p>
            </div>
            <div class="state-and-city">
                <p><span>${data[i].state}</span></p>
                <p><span>${data[i].city}</span>, </p>
                <p>${data[i].address}</p>
            </div>
            <p>Phone: ${data[i].tel}</p>
            <p>Zip: ${data[i].zip}</p>
        `;
        cardsSection.appendChild(card);
    }
    renderPagination(page, Math.ceil(data.length / 50));

}
function renderPagination(currentPage, allPages){
    const paginationContainer = document.getElementById('pagination-section');
    paginationContainer.innerHTML = '';
    let active;

    // Отобразить кнопки предыдущей и следующей страницы
    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.textContent = '<';
        prevButton.className = 'page-btn';
        prevButton.addEventListener('click', () => {
            renderData(currentPage - 1);
        });
        paginationContainer.append(prevButton);
    }
    const pagesList = document.createElement('div');
    pagesList.className = 'pages-list-container';
    // Отобразить номера страниц
    for (let i = 1; i <= allPages; i++) {
        const pageNumberButton = document.createElement('button');
        pageNumberButton.textContent = i;
        active = currentPage === i ? "active" : "no-active";
        pageNumberButton.className = "btn-page-"+active;
        pageNumberButton.addEventListener('click', () => {
            renderData(i);
        });
        pagesList.append(pageNumberButton);
    }
    paginationContainer.append(pagesList);

    if (currentPage < allPages) {
        const nextButton = document.createElement('button');
        nextButton.className = 'page-btn';
        nextButton.textContent = `>`;
        nextButton.addEventListener('click', () => {
            renderData(currentPage + 1);
        });
        paginationContainer.append(nextButton);
    }
}
const sortState = {
    fname: 0,
    lname: 0,
    tel: 0,
    address: 0,
    city: 0,
    state: 0,
    zip: 0
};
let currentSortState = 0;
function sortTableByColumn(columnName) {
    const columnIndex = Object.keys(sortState).indexOf(columnName);
    const sortDirection = currentSortState === columnIndex ? -sortState[columnName] : 1;
    currentSortState = columnIndex;
    sortState[columnName] = sortDirection;
    data.sort((a, b) => {
        const valueA = a[columnName].toLowerCase();
        const valueB = b[columnName].toLowerCase();
        let comparison = 0;

        if (valueA > valueB) {
            comparison = 1;
        } else if (valueA < valueB) {
            comparison = -1;
        }

        comparison *= sortDirection;

        return comparison;
    });
    renderData(currentPage);
}
