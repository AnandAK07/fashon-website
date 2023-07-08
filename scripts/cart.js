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
const cardDiv = document.querySelector(".js-card")



function renderPage(){
  const cart_data = JSON.parse(localStorage.getItem("cart_data")) || [];
  cart_data.forEach((elem) => {
    // Create the main container element
  // const container = document.createElement("div");
  // container.className = "justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start";
  let subtotal = document.querySelector(".js-subtotal")
  subtotal.innerHTML = "";
  const container = document.createElement("div");
  container.className = "justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start";
  
  const img = document.createElement("img");
  img.src = `${data[elem.id - 1].primary_image}`;
  img.alt = "product-image";
  img.className = "w-full rounded-lg sm:w-40";
  
  container.appendChild(img);
  
  const contentContainer = document.createElement("div");
  contentContainer.className = "sm:ml-4 sm:flex sm:w-full sm:justify-between";
  
  const insideContentContainer = document.createElement("div");
  insideContentContainer.className = "mt-5 sm:mt-0";
  const title = document.createElement("h2");
  title.className = "text-lg font-bold text-gray-900";
  title.textContent = data[elem.id - 1].title;
  
  const size = document.createElement("p");
  size.className = "mt-1 text-xs text-gray-700";
  size.textContent = data[elem.id - 1].desc;
  insideContentContainer.appendChild(title);
  insideContentContainer.appendChild(size);
  contentContainer.appendChild(insideContentContainer)
  
  
  const quantityContainer = document.createElement("div");
  quantityContainer.className = "mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6";
  
  const insideQuantityConntainer = document.createElement("div");
  insideQuantityConntainer.className = "flex items-center border-gray-100";
  const decreaseButton = document.createElement("button");
  decreaseButton.className = "cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50";
  decreaseButton.textContent = " - ";
  decreaseButton.dataset.id = elem.id;
  decreaseButton.addEventListener("click", decreseCount)
  
  const quantityInput = document.createElement("input");
  quantityInput.className = "h-8 w-8 border bg-white text-center text-xs outline-none";
  quantityInput.type = "text";
  quantityInput.value = elem.quantity;
  quantityInput.min = "1";
  
  const increaseButton = document.createElement("button");
  increaseButton.className = "cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50";
  increaseButton.textContent = " + ";
  increaseButton.dataset.id = elem.id;
  increaseButton.addEventListener("click", increaseCount);
  
  insideQuantityConntainer.appendChild(decreaseButton);
  insideQuantityConntainer.appendChild(quantityInput);
  insideQuantityConntainer.appendChild(increaseButton);
  quantityContainer.appendChild(insideQuantityConntainer);
  contentContainer.appendChild(quantityContainer);
  
  
  const priceContainer = document.createElement("div");
  priceContainer.className = "flex items-center space-x-4";
  const price = document.createElement("p");
  price.className = "text-sm";
  price.textContent = `${data[elem.id -1].price} $`;
  
  const removeIcon = document.createElement("svg");
  removeIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  removeIcon.setAttribute("fill", "none");
  removeIcon.setAttribute("viewBox", "0 0 24 24");
  removeIcon.setAttribute("stroke-width", "1.5");
  removeIcon.setAttribute("stroke", "currentColor");
  removeIcon.className = "h-5 w-5 cursor-pointer duration-150 hover:text-red-500";
  
  const removeIconPath = document.createElement("path");
  removeIconPath.setAttribute("stroke-linecap", "round");
  removeIconPath.setAttribute("stroke-linejoin", "round");
  removeIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12");
  
  removeIcon.appendChild(removeIconPath);
  priceContainer.appendChild(price)
  priceContainer.appendChild(removeIcon);
  
  contentContainer.appendChild(priceContainer);
  
  container.appendChild(contentContainer);
  cardDiv.appendChild(container)
  subtotal.appendChild(cardDiv);
})
renderSubTotal();
}

renderPage()


function renderSubTotal(){
  const cart_data = JSON.parse(localStorage.getItem("cart_data")) || [];
  let total = 0;
  cart_data.forEach((elem) => {
    // console.log(elem.quantity);
    // console.log(typeof Number(data[elem.id - 1].price));
    total += Number(data[elem.id - 1].price) * elem.quantity;
  })
  let subtotal = document.querySelector(".js-subtotal")

  let contentDiv = document.createElement("div");
  contentDiv.className = "mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3";
  contentDiv.innerHTML = `<div class="mb-2 flex justify-between">
  <p class="text-gray-700">Subtotal</p>
  <p class="text-gray-700">$${total}</p>
</div>
<div class="flex justify-between">
  <p class="text-gray-700">Shipping</p>
  <p class="text-gray-700">$4.99</p>
</div>
<hr class="my-4" />
<div class="flex justify-between">
  <p class="text-lg font-bold">Total</p>
  <div class="">
    <p class="mb-1 text-lg font-bold">$${total + 4.99} USD</p>
    <p class="text-sm text-gray-700">including VAT</p>
  </div>
</div>
<button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>`
  subtotal.appendChild(contentDiv);
}

function decreseCount(event){
  const cart_data = JSON.parse(localStorage.getItem("cart_data")) || [];
  const button = event.target;
  const id = button.dataset.id;
  cart_data[id-1].quantity = cart_data[id-1].quantity - 1;
  console.log(cart_data[id-1].quantity);
  localStorage.setItem("cart_data", JSON.stringify(cart_data));
  renderPage();
}

function increaseCount(event){
  const cart_data = JSON.parse(localStorage.getItem("cart_data")) || [];
  const button = event.target;
  const id = button.dataset.id;
  cart_data[id-1].quantity = cart_data[id-1].quantity + 1;
  console.log(cart_data[id-1].quantity);
  localStorage.setItem("cart_data", JSON.stringify(cart_data));
  renderPage();
}
