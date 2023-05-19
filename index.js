//fetchAPI
// const fetch = require('node-fetch');
//making http requests to get all the posts results

const posts_url = "https://jsonplaceholder.typicode.com/posts";

// fetch(posts_url).then(res => res.json().then(results => console.log(results)));


// async function getPosts() {

//     let result = await fetch(posts_url);
//     console.log(result);
//     let posts = await result.json()
//     console.log(posts);
// }



// getPosts()




//HTTPS REQUEST TO POST 
const new_post = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

async function postPosts() {
    try {
        let res = await fetch(posts_url, {
            method: 'POST',
            body: JSON.stringify(new_post)
        })


        let results = await res.json()
        console.log(results);
    } catch (error) {
        console.log('There was an error')
    }
}

postPosts();

//HTTP REQUEST TO UPDATE POST
const posts_url2 = "https://jsonplaceholder.typicode.com/posts/1";
let posts1 = {
    id: 1,
    title: 'foo,foo',
    body: 'bar',
    userId: 1,
};


// fetch(`${posts_url}/1`, {
//     method: 'PUT',
//     body: posts1
// });

async function putPosts() {
    try {
        let res = await fetch(posts_url2, {
            method: 'PUT',
            body: JSON.stringify(posts1)
        })


        let results2 = await res.json()
        console.log(results2);
    } catch (error) {
        console.log('There was an error');
    }
}

putPosts();

//HTTP REQUEST TO DELETE A POST

async function deletePosts() {
    try {
        let res = await fetch(posts_url2, {
            method: 'DELETE',
        })
    } catch (error) {
        console.log('There was an error')
    }
};
deletePosts();


//HTTP REQUEST TO FILTER A POST
const posts_url3 = "https://jsonplaceholder.typicode.com/posts?userId=1";
async function filterPosts() {
    try {
        let res = await fetch(posts_url3, {
            method: 'GET',
        })
        let results = await res.json()
        console.log(results);
    } catch (error) {
        console.log('There was an error')
    }
}
filterPosts();


//HTTP REQUEST TO LIST A SPECIFIC RESOURCE

const posts_url4 = "https://jsonplaceholder.typicode.com/posts/1/comments";

async function listPosts() {
    try {

        let res = await fetch(posts_url4, {
            method: 'GET',
        })
        let results = await res.json()
        console.log(results);
    } catch (error) {
        console.log('There was an error')
    }
}

listPosts();