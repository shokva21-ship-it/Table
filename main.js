
const lis = document.getElementById("lis");
const num = document.getElementById("num");
const hom = document.getElementById("hom");
const dot = document.querySelectorAll(".dot span");

const dat = [
    ["Classic Table", 199, "photo-1617806118233-18e1de247200"],
    ["Modern Black", 249, "photo-1499933374294-4584851497cc"],
    ["Wooden Style", 219, "photo-1600210492486-724fe5c67fb0"],
    ["Luxury Table", 299, "photo-1618221195710-dd6b41faaea6"],
    ["Minimal Table", 179, "photo-1600607687939-ce8a6c25118c"],
    ["Royal Table", 279, "photo-1600566753086-00f18fb6b3ea"],
    ["Glass Table", 229, "photo-1600607687920-4e2a09cf159d"],
    ["Industrial Table", 259, "photo-1615874694520-474822394e73"],
    ["Round Table", 169, "photo-1600210491369-e753d80a41f3"],
    ["Square Table", 189, "photo-1600566753190-17f0baa2a6c3"],
    ["Marble Table", 309, "photo-1600607687644-c7171b42498f"],
    ["Elegant Table", 289, "photo-1616486338812-3dadae4b4ace"],
    ["Office Table", 229, "photo-1497366811353-6870744d04b2"],
    ["Dining Table", 259, "photo-1600585154340-be6161a56a0c"],
    ["Vintage Table", 239, "photo-1600607687920-4e2a09cf159d"],
    ["Premium Table", 329, "photo-1600210492486-724fe5c67fb0"]
];

dat.forEach((item, i) => {
    lis.innerHTML += `
        <div class="card">
            <img src="https://images.unsplash.com/${item[2]}?auto=format&fit=crop&w=800&q=85" alt="${item[0]}">
            <div class="cin">
                <h3>${item[0]}</h3>
                <p>$${item[1]}</p>
                <button onclick="add()"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    `;
});

let count = 0;

function add() {
    count++;
    num.textContent = count;
}

const img = [
    "photo-1617806118233-18e1de247200",
    "photo-1600210492486-724fe5c67fb0",
    "photo-1618221195710-dd6b41faaea6"
];

let cur = 0;

function change(next) {
    cur = (next + img.length) % img.length;

    hom.style.opacity = "0.5";

    setTimeout(() => {
        hom.style.backgroundImage = `url('https://images.unsplash.com/${img[cur]}?auto=format&fit=crop&w=2000&q=90')`;
        hom.style.opacity = "1";

        dot.forEach((item, i) => {
            item.classList.toggle("act", i === cur);
        });
    }, 500);
}

hom.style.backgroundImage = `url('https://images.unsplash.com/${img[0]}?auto=format&fit=crop&w=2000&q=90')`;
hom.style.transition = "opacity 1s ease";

setInterval(() => {
    change(cur + 1);
}, 7000);

document.getElementById("nex").onclick = () => change(cur + 1);
document.getElementById("pre").onclick = () => change(cur - 1);

const tog = document.getElementById("tog");
const men = document.getElementById("men");

tog.onclick = () => {
    men.classList.toggle("shw");
};

men.querySelectorAll("a").forEach(link => {
    link.onclick = () => men.classList.remove("shw");
});

const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("vis");
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll(".card").forEach(card => {
    obs.observe(card);
});

const frm = document.getElementById("frm");

frm.onsubmit = e => {
    e.preventDefault();
    document.getElementById("msg").textContent = "Your message has been received!";
    frm.reset();
};

document.getElementById("new").onsubmit = e => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    e.target.reset();
};
