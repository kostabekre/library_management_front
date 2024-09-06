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
            if(fetchedImage.status === 404)
            {
                continue;
            }
            try {
                const id = new URL(fetchedImage.url).pathname.split('/').pop();
                const imageBlob = await fetchedImage.blob();
                fetchedBooks[id].image = URL.createObjectURL(imageBlob);
            } catch (e) {
                console.error(e.message);
            }
        }
    }
}

