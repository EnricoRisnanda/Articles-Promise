// $('.search-button').on('click', function (){
//     $.ajax({
//         url : 'https://newsapi.org/v2/everything?from=2022-11-05&sortBy=publishedAt&apiKey=3119f3b1832345caa63d75de1eb4cf13&q=' + $('.input-keyword').val(),
//         success: result => {
//             console.log(result);
//             const berita = result.articles;
//             let cards = '';
//             berita.forEach(b => {
//                 cards += showCards(b);
    
//             });
//             $('.berita-container').html(cards);
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// });

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){

    const inputKeyword = document.querySelector('.input-keyword');
    fetch('https://newsapi.org/v2/everything?from=2022-11-05&sortBy=publishedAt&apiKey=3119f3b1832345caa63d75de1eb4cf13&q=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const berita = response.articles;
            let cards = '';
            berita.forEach(b => cards += showCards(b));
            const beritaContainer = document.querySelector('.berita-container');
            beritaContainer.innerHTML = cards;
        });

});

function showCards(b){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${b.urlToImage}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${b.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${b.publishedAt}</h6>
                        <a href="#" class="btn btn-primary">Show Detail</a>
                    </div>
                </div>
            </div>`;
}