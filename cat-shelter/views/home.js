module.exports = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="/styles/site.css">
    <link rel="shortcut icon" type="image/png" href="/images/pawprint.ico" />
    <title>Cat Shelter</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/cats/add-breed">Add Breed</a></li>
                <li><a href="/cats/add-cat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
        <form action="/search">
            <input type="text">
            <button type="button">Search</button>
        </form>
    </header>

    <main>
        <section class="cats">
            <ul>
                <li>
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" alt="Black Cat">
                    <h3></h3>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
                <li>
                    <img src="https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg" alt="">
                    <h3>Pretty Kitty</h3>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
                <li>
                    <img src="https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg" alt="Black Cat">
                    <h3>Pretty Kitty</h3>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
                <li>
                    <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alt="Black Cat">
                    <h3>Pretty Kitty</h3>
                    <p><span>Price: </span>350$</p>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
                <li>
                    <img src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg" alt="Black Cat">
                    <h3>Pretty Kitty</h3>
                    <p><span>Breed: </span>Bombay Cat</p>
                    <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
            </ul>
        </section>
    </main>

</body>

</html>
`;