const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keydown", async function(x) {
    const res = await fetch('/events.json');
    const data = await res.json();
    const value = x.target.value;
    const optionBoxes = document.querySelectorAll(".search-box.options");
    const eventId = data.events.id;

        
    if (value.length === 0) {
        optionBoxes.forEach((option) => {
            option.style.display = "none";
        });
    } else {
        const fuse = new Fuse(data.events, {
            keys: ['artist'],
            includeScore: true,
            threshold: 0.4
        });

        const results = fuse.search(value);

        if (results.length > 0) {
            results.slice(0, 5).forEach((result, index) => {
                const option = optionBoxes[index];
                if (!option) return;
            
                option.style.display = "flex";
                option.querySelector('.options-text').innerText = result.item.artist;
                option.querySelector('.background-image-search-box-overlay').src = result.item.SearchImage;

                option.addEventListener("click", function() {
                    const id = result.item.id;
                    localStorage.setItem('id', id);
                    window.location.href = "/show-page/show.html";
                });
            });
            
            for (let i = results.length; i < optionBoxes.length; i++) {
                optionBoxes[i].style.display = "none";
            }
        }
    }
});
