export async function getImagesAsync(fetchedBooks) {
    const imagesToFetch = [];
    const uriCover = "http://127.0.0.1:8080/api/books/cover/";
    for (const id of Object.keys(fetchedBooks)) {
        imagesToFetch.push(fetch(uriCover + id));
    }

    let fetchedImages;
    try {
        fetchedImages = await Promise.all(imagesToFetch);
    } catch (error) {
        console.error(error);
    }

    if (fetchedImages) {
        for (const fetchedImage  of fetchedImages) {
            const id = new URL(fetchedImage.url).pathname.split('/').pop();
            const img = document.getElementById('book-image-'+ id)
            if(fetchedImage.status === 404)
            {
                img.src = "/public/empty_cover.png";
                continue;
            }
            try {
                const imageBlob = await fetchedImage.blob();
                img.src = URL.createObjectURL(imageBlob);
            } catch (e) {
                console.error(e.message);
            }
        }
    }
}

