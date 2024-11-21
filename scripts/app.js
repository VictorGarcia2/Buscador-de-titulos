const modal = document.querySelector('#modal');
const closed = document.querySelector('#close');
const postList = document.querySelector('#post-list');
const add = document.querySelector('#add');
const posts = [
    {
        id: 1,
        tittle: "Programacion desde 0",
        fecha: "12/11/2024",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis. Iusto, odio, saepe vitae voluptas obcaecati perspiciatis qui iure cupiditate cumque quas velit. Pariatur aliquam qui, laboriosam ab modi beatae mollitia sit blanditiis quis voluptatum inventore autem adipisci harum tempora pr",
    },
    {
        id: 2,
        tittle: "Programacion en ReactJS",
        fecha: "15/11/2024",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, corporis. Iusto, odio, saepe vitae voluptas obcaecati perspiciatis qui iure cupiditate cumque quas velit. Pariatur aliquam qui, laboriosam ab modi beatae mollitia sit blanditiis quis voluptatum inventore autem adipisci harum tempora praesentium minus, ducimus obcaecati magni voluptas corrupti quaerat! Molestias quibusdam, corporis",
    }
]

function toggleModal(){
    modal.classList.toggle('d-none')
}
toggleModal()

function loadPost(){
    postList.innerHTML=""
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        generarTemplate(post)
        
    }
}
loadPost()
function generarTemplate({tittle, fecha}) {
    const template = `<li class="list-group-item d-md-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center justify-content-between flex-grow-1 info ">
                    <h3>${tittle}</h3>
                    <h6>${fecha}</h6>
                </div>
                <div class="action d-flex justify-content-end gap-3 flex-grow-1">
                    <button class="btn bg-primary">
                        Edit
                    </button>
                    <button class="btn bg-danger">
                        Delete
                    </button>
                </div>
            </li>
            `  
 
            postList.innerHTML += template
}

add.addEventListener('click',toggleModal)
closed.addEventListener('click',toggleModal)



