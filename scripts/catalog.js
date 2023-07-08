const data = [
	{
		id: 1,
		title: "Futuredew",
		primary_image: "https://glossier-prod.imgix.net/products/glossier-futuredew-carousel-01.png?auto=compress,format&cs=srgb&w=360",
		desc: "Oil serum hybrid",
		price: "26",
		long_desc_title: "An instant, dewy glow that lasts.",
		long_desc: "An oil-serum hybrid that's a one-step shortcut to the way your skin looks after a full skincare routine. Packed with some of skincare’s most hydrating heavy-hitters, nourishing oils and powerful plant-based extracts give you a gleamy, well-moisturized, brighter look that lasts up to 12 hours.",
		second_img: "https://glossier-prod.imgix.net/products/futuredew-9.jpg?auto=compress,format&cs=srgb&w=540",
		uses: "", 
		uses_test: "Dermatologist tested, Good for all skin types",
	},
	{
		id: 2,
		title: "Balm Dotcom",
		primary_image: "https://glossier-prod.imgix.net/products/glossier-bdc-wildfig-carousel-01.png?auto=compress,format&cs=srgb&w=360",
		desc: "Universal salve",
		price: "14",
		long_desc_title: "Our cult-favorite, do-everything lip balm.",
		long_desc: "Our universally-loved lip balm has been a fan favorite since 2014. Formulated with antioxidants and natural emollients, the vegan, does-it-all formula immediately nourishes dry, chapped lips and keeps them quenched for hours. The specially-designed applicator makes sure your balm applies exactly where you want it. With this one, you can do it all and bring it everywhere.",
		second_img: "https://glossier-prod.imgix.net/products/glossier-bdc-wildfig-carousel-09.png?auto=compress,format&cs=srgb&w=540",
		uses: "", 
		uses_test: "Dermatologist-tested, long-lasting moisture",
	},
	{
		id: 3,
		title: "Milky Jelly Cleanser",
		primary_image: "https://glossier-prod.imgix.net/products/glossier-mjc-carousel-01.png?auto=compress,format&cs=srgb&w=360",
		desc: "Conditioning face wash",
		price: "19",
		long_desc_title: "A super gentle cleansing experience.",
		long_desc: "A nourishing and pH-balanced gel-cream cleanser that plays nicely with all skin types. Conditioning ingredients leave skin soft, smooth and never stripped to start your day. Then dissolves dirt, oil and makeup when you’re ready to wipe the day away.",
		second_img: "https://glossier-prod.imgix.net/products/glossier-mjc-carousel-08.png?auto=compress,format&cs=srgb&w=540",
		uses: "", 
		uses_test: "Dermatologist-tested, formulated without fragrance",
	},
	{
		id: 4,
		title: "Cleanser Concentrate",
		primary_image: "https://glossier-prod.imgix.net/products/glossier-cleanser-concentrate-carousel-01.png?auto=compress,format&cs=srgb&w=360",
		desc: "Clarifying face wash",
		price: "21",
		long_desc_title: "A plant-powered deep clean",
		long_desc: "A highly concentrated, purifying cleanser that gently exfoliates, clarifies and re-energizes skin in 60 seconds. An A-Team of powerful plant exfoliators—Grape Extract and Lactic Acid—gently smooth skin and brighten your glow, while amino acid surfactants create an undetectable film that holds on to key ingredients so they can work on the skin instead of just rinsing down the drain.",
		second_img: "https://glossier-prod.imgix.net/products/glossier-cleanser-concentrate-carousel-08.png?auto=compress,format&cs=srgb&w=540",
		uses: "", 
		uses_test: "Dermatologist tested, formulated without fragrance, recyclable bottle",
	},
	{
		id: 5,
		title: "Priming Moisturizer",
		primary_image: "https://glossier-prod.imgix.net/products/glossier-priming-moisturizer-carousel-01.png?auto=compress,format&cs=srgb&w=360",
		desc: "Buildable hydrating creme",
		price: "24",
		long_desc_title: "Light and buildable moisture for a dewy, smooth canvas.",
		long_desc: "A lightweight, buildable moisturizer that instantly brings out the best in all skin types. It hydrates, visibly evens skin texture, and minimizes the look of pores—while priming skin for gorgeous makeup application.",
		second_img: "https://glossier-prod.imgix.net/products/glossier-priming-moisturizer-carousel-06.png?auto=compress,format&cs=srgb&w=540",
		uses: "", 
		uses_test: "Dermatologist-tested, long-lasting moisture, formulated without fragrance, good for for all skin types",
	},
	{
		id: 6,
		title: "Priming Moisturizer Balance",
		primary_image: "https://glossier-prod.imgix.net/products/glossier-priming-moisturizer-balance-carousel-01_4b6e0d57-d05e-46fc-8610-ab6201468c2c.png?auto=compress,format&cs=srgb&w=360",
		desc: "Oil-control gel cream",
		price: "25",
		long_desc_title: "One step to moisturize, control shine, and refine the look of pores—specifically formulated for oily and combination skin.",
		long_desc: "A fast-absorbing, lightweight gel-cream moisturizer that balances oil without over-drying or leaving a powdery finish. Immediately, thanks to Marine Extract and Niacinamide, pores appear smaller, shine is gone, and skin is hydrated and happy—with more skin-balancing benefits over time.",
		second_img: "https://glossier-prod.imgix.net/products/glossier-priming-moisturizer-balance-carousel-08.png?auto=compress,format&cs=srgb&w=540",
		uses: "", 
		uses_test: "Dermatologist-tested, formulated without fragrance, alcohol and oil-free, gluten and dairy-free, GMO-free",
	},
	{
		id: 7,
		title: "Priming Moisturizer Rich",
		primary_image: "https://glossier-prod.imgix.net/products/glossier-priming-moisturizer-rich-carousel-01.png?auto=compress,format&cs=srgb&w=360",
		desc: "Luxurious face cream",
		price: "35",
		long_desc_title: "Dry skin’s best friend—an ultra rich, buttery moisturizer.",
		long_desc: "A luxuriously rich yet fast-absorbing face cream that delivers a surge of long-lasting hydration. The buttery texture and blend of botanical oils and glycerin melt into skin to give you a smooth, dewy finish that’s perfectly prepped for makeup.",
		second_img: "https://glossier-prod.imgix.net/products/glossier-priming-moisturizer-rich-carousel-08.png?auto=compress,format&cs=srgb&w=540",
		uses: "", 
		uses_test: "Formulated without fragrance, silicone-free, recyclable glass",
	},
	{
		id: 8,
		title: "Invisible Shield",
		primary_image: "https://glossier-prod.imgix.net/products/glossier-invisible-shield-carousel-01_f6471fa7-9197-4c39-8cec-00ab11b7691b.png?auto=compress,format&cs=srgb&w=360",
		desc: "Daily sunscreen +",
		price: "25",
		long_desc_title: "Sunscreen for people who hate wearing sunscreen.",
		long_desc: "Lightweight and undetectable, this water-gel SPF 35 applies like a serum, with no greasy residue or white cast. Specially designed so even the sunscreen haters can't help but fall in love with it, Invisible Shield helps prevent sun damage and sun burn, while neutralizing harmful free radicals. Plus, the active microcapsules instantly absorb onto skin and play well with makeup, so you really have no reason to skip SPF.",
		second_img: "https://glossier-prod.imgix.net/products/glossier-invisible-shield-carousel-07.png?auto=compress,format&cs=srgb&w=540",
		uses: "", 
		uses_test: "Dermatologist-tested, plays well with all skin types",
	},
	{
		id: 9,
		title: "After Baume",
		primary_image: "https://glossier-prod.imgix.net/products/glossier-after-baume-carousel-01_23fe78f1-1917-42e6-9448-b7f44e65acfc.png?auto=compress,format&cs=srgb&w=360",
		desc: "Moisture barrier recovery cream",
		price: "28",
		long_desc_title: "A puffer jacket for your skin.",
		long_desc: "A daily moisture barrier recovery cream perfect for very dry and/or sensitive skin. The buttery, cocooning cream formulated with plant-based moisture magnets, Glycerin and Cupuaçu Butter, helps dry skin bounce back and lock in hydration for up to 24 hours. Awarded the National Eczema Association Seal of Acceptance",
		second_img: "https://glossier-prod.imgix.net/products/glossier-after-baume-carousel-08.png?auto=compress,format&cs=srgb&w=540",
		uses: "", 
		uses_test: "Dermatologist tested, formulated without fragrance",
	},
];
let cartData=JSON.parse(localStorage.getItem('cartData')) || []
const content = document.querySelector(".content");
data.forEach((elem) => {
	const cardDiv = document.createElement("div");
	cardDiv.classList.add("card");

	const image_a = document.createElement("a");
	const primary_image = document.createElement("img");
	primary_image.src = `${elem.primary_image}`;
	image_a.href = `product_details.html/?id=${elem.id}`
	image_a.appendChild(primary_image);

	const title_price = document.createElement("div");
	title_price.classList.add("title-price");
	const title = document.createElement("h3");
	title.classList.add("title");
	title.textContent = elem.title;
	const price = document.createElement("p");
	price.textContent = `$${elem.price}`
	price.classList.add("price");
	title_price.append(title, price);

	const desp = document.createElement("p");
	desp.classList.add("desp");
	desp.textContent = elem.desc;

	const button = document.createElement("button")
	button.textContent = "Add to Bag";
	button.classList.add("addtobag")
	button.dataset.id = elem.id;
	button.addEventListener("click", ()=>{
		if(check(elem.title, elem.id, elem.desc)==true){
			alert('item already in cart')
		}else{
			cartData.push(elem);
		    localStorage.setItem('cartData', JSON.stringify(cartData));
		}
	});

	cardDiv.append(image_a, title_price, desp, button);
	content.appendChild(cardDiv)
	
})
function check(name, id, desc){
	let checkedVal=cartData.filter(function(elem){
		return elem.title==name || elem.id==id || elem.desc==desc
	})
	if(checkedVal!=0){
		return true;
	}else{
		return false;
	}
}

// function addtocart(event){
// 	const cart_data = JSON.parse(localStorage.getItem("cart_data")) || [];
// 	const button = event.target;
// 	let id = button.dataset.id;
// 	// console.log(button.dataset.id);
// 	console.log(id);
// 	let idFound = false;
// 	cart_data.forEach((elem) => {
// 		if(elem.id ===  id){
// 			elem.id = id;
// 			elem.quantity = elem.quantity +1;
// 			idFound = true
			
// 		}
// 	})
// 	if(!idFound){
// 		const obj = {
// 			id: id,
// 			quantity: 1,
// 		}
// 		cart_data.push(obj)
// 	}
// 	localStorage.setItem("cart_data", JSON.stringify(cart_data));
// }


/* 
localstorage getitem
let total = 0

cart_data.forEach((elem)=>{
	if(elem.id === data.id)
})

document title change
price update
total update



*/